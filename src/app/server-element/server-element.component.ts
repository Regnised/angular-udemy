import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log(' constructor called! ');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(' ngOnChanges = ', changes);
  }

  ngOnInit() {
    console.log(' ngOnInit called !');
    console.log(' --- ', this.header.nativeElement.textContent);
    console.log(' --2 ngAfterContentInit !', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log(' ngDoCheck called !');
  }

  ngAfterContentInit(): void {
    console.log(' ngAfterContentInit called !', );
    console.log(' --- 3 ngAfterContentInit !', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log(' ngAfterContentChecked called !', );
  }

  ngAfterViewInit(): void {
    console.log(' ngAfterViewInit called !');
    console.log(' --3 ', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log(' ngAfterViewChecked called !');
  }

  ngOnDestroy(): void {
    console.log(' onDestroy called !', );
  }

}
