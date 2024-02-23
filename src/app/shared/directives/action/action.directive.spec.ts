import { TestBed } from '@angular/core/testing';
import { ActionDirection } from './action.direction';
import { ActionDirectiveModule } from './action.direction.module';

describe(ActionDirection.name, () => {

  beforeEach(async ()=> {
    await TestBed.configureTestingModule({
      imports: [ActionDirectiveModule]
    }).compileComponents()
  })
})
