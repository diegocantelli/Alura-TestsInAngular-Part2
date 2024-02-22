import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  styleUrls: ['./photo-frame.component.scss'],
  templateUrl: './photo-frame.component.html'
})
export class PhotoFrameComponent implements OnInit, OnDestroy{


  @Output() liked: EventEmitter<void> = new EventEmitter();
  @Input() description = '';
  @Input() src = '';
  @Input() likes = 0;
  private debounceSubject: Subject<void> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  ngOnInit(): void {
    this.debounceSubject
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.liked.emit());
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public like(): void {
    //Toda vez que esse metodo for acionado, ele ira disparar um evento para todos que estiven inscritos nele
    this.debounceSubject.next();
  }
}
