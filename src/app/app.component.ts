import { Component, OnInit } from '@angular/core';
import { TeamsService } from './service/teams.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  teams;
  isLoaded: boolean = false;
  date: Date = new Date();

  constructor(private testService: TeamsService) {}

  ngOnInit(): void {
    this.testService.getTeams().subscribe((response) => {
      this.teams = response['teams'];
      this.isLoaded = !this.isLoaded;
    });
  }

  public changeDate(date: Date) {
    this.date = date;
  }
}
