import { Component, Signal } from '@angular/core';
import { SignalService } from '../../../services/signal.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'signals-project';

  newUser: User = {
    firstName: '',
    lastName: '',
    age: 0,
    fullName:'',
    isAdult:false,
  };

  displayedColumns: string[] = ['firstName', 'lastName', 'fullName', 'age', 'isAdult', 'actions'];

  usersSignal: Signal<User[]> = this.signalService.users;

  constructor(public signalService: SignalService) {
    this.usersSignal = this.signalService.users;
  }

  // Method to update values and add user
  updateValues() {
    this.signalService.updateValues(this.newUser.firstName, this.newUser.lastName, this.newUser.age);
    this.signalService.addUser(); // Add user when values are updated

    // Clear input fields
    this.newUser = { firstName: '', lastName: '', age: 0,fullName:'',isAdult:false};
  }

  get users(): User[] {
    return this.signalService.users ();
  }
  // Method to remove a user
  removeUser(user: User) {
    this.signalService.removeUser(user);
  }

}