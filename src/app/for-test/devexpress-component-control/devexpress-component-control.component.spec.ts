import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevexpressComponentControlComponent } from './devexpress-component-control.component';

describe('DevexpressComponentControlComponent', () => {
  let component: DevexpressComponentControlComponent;
  let fixture: ComponentFixture<DevexpressComponentControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevexpressComponentControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevexpressComponentControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
