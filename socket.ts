import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { io } from 'socket.io-client';
import {switchMap} from 'rxjs/operators'
import {fromEvent} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket$!: Observable<any>;
  constructor() { 
    const socket = io("http://localhost:3000", { transports : ['websocket'] });
    this.socket$ = of(socket);
  }

 listenOnEvent(event: string) {
    return this.socket$.pipe(switchMap((socket) => fromEvent(socket, event)));
  };

 
}
