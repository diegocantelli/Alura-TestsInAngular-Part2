import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent;

  beforeEach(async ()=> {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should trigger (@Output like) once when called multiple times within debounce time', fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    //Primeiro é necessário fazer o subscribe para quando o like() for chamado o codigo dentro do subscribe ser executado
    component.liked.subscribe(() => times++);
    component.like();
    component.like();
    tick(500)
    expect(times).toBe(1)
  }))

  it('Should trigger (@Output like) two times called multiple times outised debounce time', fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    //Primeiro é necessário fazer o subscribe para quando o like() for chamado o codigo dentro do subscribe ser executado
    component.liked.subscribe(() => times++);
    component.like();
    tick(500)
    component.like();
    tick(500)
    expect(times).toBe(2)
  }))

  it('Should display number of likes when(@Input likes) is incremented', () => {
    fixture.detectChanges()
    component.likes++
    fixture.detectChanges()
    const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter')
    expect(element.textContent.trim()).toBe('1')
  })

  it('Should update aria-label when (@Input likes) is incremented', () => {
    fixture.detectChanges()
    component.likes++
    fixture.detectChanges()
    const element: HTMLElement = fixture.nativeElement.querySelector('span')
    expect(element.getAttribute('aria-label')).toBe('1: people liked')
  })

  it('Should have aria-label with 0 (@Input likes)', () => {
    fixture.detectChanges()
    const element: HTMLElement = fixture.nativeElement.querySelector('span')
    expect(element.getAttribute('aria-label')).toBe('0: people liked')
  })

  it('(DOM) Should display image with src and description when bound to properties', () => {
    const description = 'some description'
    const src = 'http://somesite.com/img.jpg'

    component.src = src
    component.description = description

    fixture.detectChanges()
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img')

    expect(component.src).toBe(src)
    expect(component.description).toBe(description)
  })
})
