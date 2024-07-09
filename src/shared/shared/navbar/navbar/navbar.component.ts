import { Component ,Output,EventEmitter} from '@angular/core';
import { SignalService } from '../../../../services/signal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() personIconClick = new EventEmitter<void>();

  constructor(public signalService: SignalService) {}

  onPersonIconClick() {
    this.personIconClick.emit();
  }
 
}
