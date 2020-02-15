import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEvComponent } from './add-new-ev.component';

describe('AddNewEvComponent', () => {
  let component: AddNewEvComponent;
  let fixture: ComponentFixture<AddNewEvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewEvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
