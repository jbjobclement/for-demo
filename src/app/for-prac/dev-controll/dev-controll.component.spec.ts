import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevControllComponent } from './dev-controll.component';

describe('DevControllComponent', () => {
  let component: DevControllComponent;
  let fixture: ComponentFixture<DevControllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevControllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
