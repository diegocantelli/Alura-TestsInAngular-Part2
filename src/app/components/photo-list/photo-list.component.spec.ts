import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { HttpClientModule } from '@angular/common/http';

describe
(PhotoListComponent.name, () => {
  let fixture: ComponentFixture<PhotoListComponent>
  let component: PhotoListComponent

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
    }).compileComponents()

    fixture = TestBed.createComponent(PhotoListComponent)
    component = fixture.componentInstance
  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })
})
