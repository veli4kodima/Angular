import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() date: Date;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  public changeDate(event): void {
    if (event.target.name === 'previous') {
      this.onChange.emit(
        new Date(this.date.getFullYear(), this.date.getMonth(), 0)
      );
    } else if (event.target.name === 'next') {
      this.onChange.emit(
        new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0)
      );
    }
  }
}
