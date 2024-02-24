import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from './interface/photo';

@Component({
  selector: 'app-photo-board',
  styleUrls: ['photo-board.component.scss'],
  templateUrl: './photo-board.component.html'
})
export class PhotoBoardComponent implements OnChanges{
  @Input() public photos: Photo[];
  public rows: any[][] = []

  constructor() {}

  // ciclo de vida que é disparado toda vez que uma input property possui seu valor modificado
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos){
      this.rows = this.groupColumns(changes.photos.currentValue)
    }
  }

  private groupColumns(photos: Photo[]) : any[][] {
    const newRows = []

    for (let index = 0; index < photos.length; index+=4) {
      newRows.push(photos.slice(index, index + 4))
    }

    return newRows
  }
}
