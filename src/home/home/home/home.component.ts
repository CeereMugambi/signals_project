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

  // Define the type of results as an object
  results: { [key: string]: string } = {};

  displayedColumns: string[] = [];

  constructor(public signalService: SignalService) {
    // Initialize form fields with the current signal values
    this.firstName = this.signalService.firstName();
    this.lastName = this.signalService.lastName();
    this.age = this.signalService.age();

    // Initialize results with initial values
    this.updateTable();
  }

  // Method to update values and table
  updateValues() {
    this.signalService.updateValues(this.firstName, this.lastName, this.age);

    // Update local variables
    this.firstName = this.signalService.firstName();
    this.lastName = this.signalService.lastName();
    this.age = this.signalService.age();

    // Update results and displayedColumns
    this.updateTable();
  }

  // Helper method to update results and displayedColumns
  private updateTable() {
    this.results = {
      'First Name': this.firstName,
      'Last Name': this.lastName,
      'Full Name': this.signalService.fullName(),
      'Age': this.age.toString(),
      'Is Adult': this.signalService.isAdult().toString()
    };

    // Update displayedColumns with all property names
    this.displayedColumns = Object.keys(this.results);
  }
}