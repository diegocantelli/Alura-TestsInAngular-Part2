import { Component, Input } from '@angular/core';
import { Photo } from './interface/photo';

@Component({
  selector: 'app-photo-board',
  styleUrls: ['photo-board.component.scss'],
  templateUrl: './photo-board.component.html'
})
export class PhotoBoardComponent{
  @Input() public photos: Photo[];
  public rows: any[][] = []

  constructor() {}
}
