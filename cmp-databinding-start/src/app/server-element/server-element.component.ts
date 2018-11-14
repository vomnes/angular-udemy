import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string,
  };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('constructor called !');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called !');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called !');
  }

  ngDoCheck() {
    console.log('ngDoCheck called !');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called !');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called !');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called !');
    console.log('Text content:', this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called !');
  }

}
