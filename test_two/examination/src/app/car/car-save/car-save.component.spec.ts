import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSaveComponent } from './car-save.component';

describe('CarSaveComponent', () => {
  let component: CarSaveComponent;
  let fixture: ComponentFixture<CarSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
