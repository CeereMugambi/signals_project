import { Component } from '@angular/core';
import { SignalService } from '../../../services/signal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'signals-project';
  constructor(public signalService: SignalService) {}

  // Method to update values
  updateValues() {
    this.signalService.updateValues('Jane', 'Smith', 25);
  }
}

