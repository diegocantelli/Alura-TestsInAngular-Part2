import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photo-frame',
  styleUrls: ['./photo-frame.component.scss'],
  templateUrl: './photo-frame.component.html'
})
export class PhotoFrameComponent{
  @Output() liked: EventEmitter<void> = new EventEmitter();
  @Input() description = '';
  @Input() src = '';
  @Input() likes = 0;

  public like(): void {
    this.liked.emit();
  }
}
