import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { buildPhotosList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { of } from 'rxjs';

describe
(PhotoListComponent.name, () => {
  let fixture: ComponentFixture<PhotoListComponent>
  let component: PhotoListComponent
  let service: PhotoBoardService

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
    }).compileComponents()

    fixture = TestBed.createComponent(PhotoListComponent)
    component = fixture.componentInstance
    service = TestBed.inject(PhotoBoardService)
  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

  it('Should display board when data arrives', () => {
    const photos = buildPhotosList()

    spyOn(service, 'getPhotos')
      .and
      .returnValue(of(photos))

    fixture.detectChanges()

    const board = fixture.nativeElement.querySelector('app-photo-board')
    const loader = fixture.nativeElement.querySelector('.loader')

    expect(board).not.toBeNull()
    expect(loader).toBeNull()
  })

  it('Should display loader while waiting data to arrive', () => {
    const photos = buildPhotosList()

    spyOn(service, 'getPhotos')
      .and
      .returnValue(of(photos))

    fixture.detectChanges()

    const board = fixture.nativeElement.querySelector('app-photo-board')
    const loader = fixture.nativeElement.querySelector('.loader')

    expect(board).toBeNull()
    expect(loader).not.toBeNull()
  })
})
