import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardService } from './services/photo-board.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, PhotoFrameModule, HttpClientModule],
  exports: [PhotoBoardComponent],
  declarations: [PhotoBoardComponent],
  providers: [PhotoBoardService]
})
export class PhotoBoardModule{

}
