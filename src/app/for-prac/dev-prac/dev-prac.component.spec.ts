import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPracComponent } from './dev-prac.component';

describe('DevPracComponent', () => {
  let component: DevPracComponent;
  let fixture: ComponentFixture<DevPracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevPracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
