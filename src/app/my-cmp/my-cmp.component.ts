import {afterNextRender, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-my-cmp',
  standalone: true,
  imports: [],
  templateUrl: './my-cmp.component.html',
  styleUrl: './my-cmp.component.scss'
})
export class MyCmpComponent {
  @ViewChild('content') contentRef: ElementRef | undefined;
  constructor() {
    afterNextRender(() => {
      // Safe to check `scrollHeight` because this will only run in the browser, not the server.
      console.log('content height: ' + this.contentRef?.nativeElement.scrollHeight);
    });
  }
}
