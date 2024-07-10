import { Component, OnInit ,Input, signal} from '@angular/core';
import { Signal, computed } from "@angular/core";
import { User } from '../../../models/user.model';
import { SignalService } from '../../../services/signal.service';

@Component({
  selector: 'app-adultusers',
  templateUrl: './adultusers.component.html',
  styleUrl: './adultusers.component.scss'
})
export class AdultusersComponent implements OnInit {

  @Input() users: Signal<User[]> = signal<User[]>([]);
  adults: Signal<User[]> = signal<User[]>([]);
  displayedColumns: string[] = ['fullName', 'age'];
  
  constructor(public signalService: SignalService) {}

  ngOnInit() {
    this.adults = computed(() => this.users().filter(user => user.isAdult));
  }
}
