import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoBoardComponent } from './photo-board.component';

@NgModule({
  imports: [CommonModule, PhotoFrameModule],
  exports: [PhotoBoardComponent],
  declarations: [PhotoBoardComponent]
})
export class PhotoBoardModule{

}
