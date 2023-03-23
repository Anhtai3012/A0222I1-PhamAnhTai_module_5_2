import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoHangSaveComponent } from './lo-hang-save.component';

describe('LoHangSaveComponent', () => {
  let component: LoHangSaveComponent;
  let fixture: ComponentFixture<LoHangSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoHangSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoHangSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
