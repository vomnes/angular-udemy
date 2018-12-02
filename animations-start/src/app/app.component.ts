import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      // Style variable need to respect the right standard for each state
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)',
      })),
      transition('normal <=> highlighted', animate(100)),
      // transition('highlighted => normal', animate(100)),
    ]),
    trigger('wildState', [
      // Style variable need to respect the right standard for each state
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)',
        borderRadius: '0'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)',
        borderRadius: '0'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0px) scale(0.5)',
        borderRadius: '0'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ]),
    ]),
    trigger('list1', [
      // Style variable need to respect the right standard for each state
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ]),
    ]),
    trigger('list2', [
      // Style variable need to respect the right standard for each state
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        // Set up reference in the time
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0 // Moment in the frame
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          }),
        ]))
      ]),
      transition('* => void', [
        // Make animation start at the same time
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ]),
    ]),
    trigger('menu', [
      // Style variable need to respect the right standard for each state
      state('false', style({
        // width: '0px',                // Effect - 1
        transform: 'translateX(-150px)' // Effect - 2
      })),
      state('true', style({
        // width: '150px',              // Effect - 1
        transform: 'translateX(0)'      // Effect - 2
      })),
      transition('false <=> true', animate(300)),
    ]),
    trigger('top', [
      // Style variable need to respect the right standard for each state
      state('false', style({
        height: '10px',
      })),
      state('true', style({
        height: '350px',
      })),
      transition('false <=> true', animate(300)),
    ]),
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];
  sideOpened = false;
  topOpened = false;

    onAnimate() {
      this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    }

    onShrink() {
      this.wildState = 'shrunken';
    }

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item) {
      var index = this.list.indexOf(item);
      if (index > -1) {
        this.list.splice(index, 1);
      }
    }

    // Catch start/done events - callback
    animationStarted(event) {
      console.log(event);
    }

    animationEnded(event) {
      console.log(event);
    }

    onToggleSide() {
      this.sideOpened = !this.sideOpened;
      console.log(this.sideOpened);
    }

    onToggleTop() {
      this.topOpened = !this.topOpened;
    }
}
