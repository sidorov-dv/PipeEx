import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PipeExamples';
  birthday = new Date(1988, 3, 15);
  cost = 1.234;
  power = 5;
  factor = 1;

  toggle = true; // start with true == shortDate
  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  message$ = new Observable<string>();

  constructor() {
    this.message$ = this.getResendObservable();
  }

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  resend() {
    this.message$ = this.getResendObservable();
  }

  private getResendObservable() {
    return interval(2000).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }
}
