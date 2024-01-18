import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevTextComponent } from './dev-text.component';

describe('DevTextComponent', () => {
  let component: DevTextComponent;
  let fixture: ComponentFixture<DevTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
