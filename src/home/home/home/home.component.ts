import { Component } from '@angular/core';
import { SignalService } from '../../../services/signal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'signals-project';

  firstName: string;
  lastName: string;
  age: number;

  results = [
    { property: 'Full Name', value: '' },
    { property: 'Is Adult', value: '' }
  ];
  displayedColumns: string[] = ['property', 'value'];


  constructor(public signalService: SignalService) {
    // Initialize form fields with the current signal values
    this.firstName = this.signalService.firstName();
    this.lastName = this.signalService.lastName();
    this.age = this.signalService.age();
  }

  // Method to update values
  updateValues() {
    this.signalService.updateValues(this.firstName, this.lastName, this.age);
    this.results = [
      { property: 'Full Name', value: this.signalService.fullName() },
      { property: 'Is Adult', value: this.signalService.isAdult().toString() }
    ];
  }
}


