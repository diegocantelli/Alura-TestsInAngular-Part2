import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from '../photo-board.component';
import { PhotoBoardModule } from '../photo-board.module';
import { Photo } from '../interface/photo';
import { SimpleChange, SimpleChanges } from '@angular/core';

function buildPhotosList(): Photo[] {
  const photos: Photo[] = []

  for (let index = 0; index < 8; index++) {
    photos.push({ id: index+1, description: '', url: ''})
  }

  return photos
}
describe(PhotoBoardComponent.name, () => {
  let fixture: ComponentFixture<PhotoBoardComponent>;
  let component: PhotoBoardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule]
    }).compileComponents()

    fixture = TestBed.createComponent(PhotoBoardComponent)
    component = fixture.componentInstance
  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

  it('Should display rows and columns when (@Input photos) has value', () => {
    component.photos = buildPhotosList()
    fixture.detectChanges()
    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true)
    }

    component.ngOnChanges(change)
    expect(component.rows.length)
      .withContext('Number of rows')
      .toBe(2)

    expect(component.rows[0].length)
      .withContext('Number of columns')
      .toBe(4)
  })

})
