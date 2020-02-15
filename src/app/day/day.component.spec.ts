import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DAYComponent } from './day.component';

describe('DAYComponent', () => {
  let component: DAYComponent;
  let fixture: ComponentFixture<DAYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DAYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
