import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/service/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [],
})
export class NavbarComponent implements OnInit {
  currentTime: string = '';
  is24HourFormat: boolean = true;
  searchTerm: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.updateTime();
  }

  updateTime() {
    const now = new Date();
    this.currentTime = this.formatTime(now);

    setInterval(() => {
      const now = new Date();
      this.currentTime = this.formatTime(now);
    }, 1000);
  }

  formatTime(date: Date): string {
    if (this.is24HourFormat) {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes} Uhr`;
    } else {
      const hours = date.getHours() % 12 || 12;
      const ampm = date.getHours() < 12 ? 'AM' : 'PM';
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes} ${ampm}`;
    }
  }

  toggleTimeFormat() {
    this.is24HourFormat = !this.is24HourFormat;
    const now = new Date();
    this.currentTime = this.formatTime(now);
  }

  onSearchInput(event: any) {
    const searchTerm = event.target.value;
    this.searchService.setSearchTerm(searchTerm);
  }
}
