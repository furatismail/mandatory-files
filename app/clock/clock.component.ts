import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  providers: []
})
export class ClockComponent {

}
