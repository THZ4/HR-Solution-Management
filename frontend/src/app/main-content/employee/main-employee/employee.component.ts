import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/service/employee.service';
import { SearchService } from 'src/service/search.service';
import { Employee } from 'src/ts/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  currentPage = 1;
  itemsPerPage: number= 6;
  status: string = 'Anwesend';

  constructor(
    private employeeService: EmployeeService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();

   
    const test: number = 2;

    this.searchService.getSearchTerm().subscribe((term) => {
      if (term.trim() !== '') {
        this.filteredEmployees = this.employees.filter((employee) =>
          this.employeeMatchesSearch(employee, term)
        );
      } else {
        this.filteredEmployees = [...this.employees];
      }

      this.currentPage = 1;
    });
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data.map((employee: Employee) => ({
          ...employee,
          status: this.getRandomStatus(),
        }));

        this.filteredEmployees = [...this.employees];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        console.log('Mitarbeiter gelöscht');
        // After deletion, reload the employees
        this.loadEmployees();
      },
      (error) => {
        console.error('Fehler beim Löschen des Mitarbeiters', error);
      }
    );
  }

  // Pagination
  pagedEmployees(): Employee[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredEmployees.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  pages(): number[] {
    const pageCount = Math.ceil(
      this.filteredEmployees.length / this.itemsPerPage
    );
    return Array(pageCount)
      .fill(0)
      .map((_, index) => index + 1);
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
  }

  nextPage(): void {
    if (this.currentPage < this.pages().length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Random Anwesenheit Status
  getRandomStatus(): string {
    const statuses = ['Anwesend', 'Abwesend', 'Abgestempelt'];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Anwesend':
        return 'present-green';
      case 'Abwesend':
        return 'absent-red';
      case 'Abgestempelt':
        return 'stamped-out-yellow';
      default:
        return 'present-green';
    }
  }

  // Suchefunktion
  employeeMatchesSearch(employee: Employee, term: string): boolean {
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
    return fullName.includes(term.toLowerCase());
  }
}
