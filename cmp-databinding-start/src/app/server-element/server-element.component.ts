import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ContentChild,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
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
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called !');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called !');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called !');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called !');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called !');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
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