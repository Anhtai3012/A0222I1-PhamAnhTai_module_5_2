import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFacilityComponent } from './save-facility.component';

describe('SaveFacilityComponent', () => {
  let component: SaveFacilityComponent;
  let fixture: ComponentFixture<SaveFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
