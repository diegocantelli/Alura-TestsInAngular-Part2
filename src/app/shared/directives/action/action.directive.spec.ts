import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirection } from './action.direction';
import { ActionDirectiveModule } from './action.direction.module';
import { Component } from '@angular/core';

describe(ActionDirection.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>
  let component: ActionDirectiveTestComponent

  beforeEach(async ()=> {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule]
    }).compileComponents()

    fixture = TestBed.createComponent(ActionDirectiveTestComponent)
    component = fixture.componentInstance
  })

  it('(DOM) (@Output action) should emit event with payload when ENTER key is pressed', () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component')
    const event = new KeyboardEvent('keyup', { key: 'Enter'})
    divEl.dispatchEvent(event)
    expect(component.hasEvent()).toBeTrue()
  })
})

@Component({
  template: `<div class="dummy-component" (appAction)="actionHandler($event)"> </div>`
})
class ActionDirectiveTestComponent{
  private event: Event = null

  public actionHandler(event: Event): void{
    this.event = event
  }

  // metodo criado apenas para testar se a diretiva esta passando o evento como payload
  public hasEvent(): boolean {
    return !!this.event
  }
}
