import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';
  socket$! : Observable<any>;

  constructor(private socketService: SocketService) {
   
    
  }

  ngOnInit() {
    this.socketService.listenOnEvent('generator').subscribe(res => console.log(res));
  }
}
