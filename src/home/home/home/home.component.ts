import { Component, Signal } from '@angular/core';
import { SignalService } from '../../../services/signal.service';
import { User } from '../../../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';


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

   // Columns to be displayed in the main users table
  displayedColumns: string[] = ['firstName', 'lastName', 'fullName', 'age', 'isAdult', 'actions'];

  // Signal to hold the list of users
  usersSignal: Signal<User[]> = this.signalService.users;

  // Signal to hold the list of adult users
  adultUsersSignal: Signal<User[]> = this.signalService.adultUsers;

  // Signal to hold the list of verified users
  verifiedUsersSignal: Signal<User[]> = this.signalService.verifiedUsers;

  constructor(public signalService: SignalService,private snackBar: MatSnackBar) {

  // Initialize the users signal
    this.usersSignal = this.signalService.users;
    this.adultUsersSignal = this.signalService.adultUsers;
    this.verifiedUsersSignal = this.signalService.verifiedUsers;
  }

  // Method to update values and add user
  updateValues() {
    this.signalService.updateValues(this.newUser.firstName, this.newUser.lastName, this.newUser.age);
    this.signalService.addUser(); // Add user when values are updated

    // Clear input fields
    this.newUser = { firstName: '', lastName: '', age: 0,fullName:'',isAdult:false};
  }

  // Getter to retrieve the list of users from the signal service
  get users(): User[] {
    return this.signalService.users ();
  }

   // Getter to retrieve the list of adult users from the signal service
   get adultUsers(): User[] {
    return this.signalService.adultUsers();
  }

  // Getter to retrieve the list of verified users from the signal service
  get verifiedUsers(): User[] {
    return this.signalService.verifiedUsers();
  }

  // Method to remove a user
  removeUser(user: User) {
    this.signalService.removeUser(user);
  }

  // Method to handle verified users output from the child component
  handleVerifiedUsersOutput(verifiedUsers: User[]) {
    this.signalService.verifiedUsers.update(() => verifiedUsers);
  }

}