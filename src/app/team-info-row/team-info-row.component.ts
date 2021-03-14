import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-info-row',
  templateUrl: './team-info-row.component.html',
  styleUrls: ['./team-info-row.component.scss'],
})
export class TeamInfoRowComponent {
  @Input() team;
  @Input() date: Date;

  nextElement(element) {
    return (element = element.nextElementSibling);
  }

  toggleDisplay(event): void {
    let element = event.path[5];

    for (let key in this.team['members']) {
      element = this.nextElement(element);
      element.classList.toggle('hidden');
    }
  }
}
