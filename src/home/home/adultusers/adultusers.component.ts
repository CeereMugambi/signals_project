import { Component, OnInit ,Input, signal,Output,EventEmitter,effect} from '@angular/core';
import { Signal, computed } from "@angular/core";
import { User } from '../../../models/user.model';
import { SignalService } from '../../../services/signal.service';

@Component({
  selector: 'app-adultusers',
  templateUrl: './adultusers.component.html',
  styleUrl: './adultusers.component.scss'
})
export class AdultusersComponent implements OnInit {
// Input signal to receive the list of users from the parent component
@Input() adultusers: Signal<User[]> = signal<User[]>([]);
  
// Signal to hold the list of adult users
adults: Signal<User[]> = signal<User[]>([]);

// Output event emitter to send the verified users to the parent component
@Output() verifiedUsersOutput = new EventEmitter<User[]>();

// Signal to hold the list of verified users
verifiedUsers: Signal<User[]> = signal<User[]>([]);

displayedColumns: string[] = ['fullName', 'age','verify'];
 
 constructor(public signalService: SignalService) {
}

 ngOnInit() {
   /// Compute the list of adult users from the input users
   this.adults = computed(() => this.adultusers().filter(user => user.isAdult));
   
}
 // Method to verify a user
 verifyUser(user: User) {
  // Invoke the verifyUser method from the service
  this.signalService.verifyUser(user);

  // Emit the updated verified users list to the parent component
  this.verifiedUsersOutput.emit(this.verifiedUsers());
}
// Method to check if a user is verified
isVerified(user: User): boolean {
  return this.signalService.verifiedUsers().includes(user);
}

}