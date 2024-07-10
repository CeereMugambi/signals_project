import { Component ,Output,EventEmitter} from '@angular/core';
import { SignalService } from '../../../../services/signal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public signalService: SignalService) {}
 
}
