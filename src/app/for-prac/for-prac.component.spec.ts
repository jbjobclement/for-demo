import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPracComponent } from './for-prac.component';

describe('ForPracComponent', () => {
  let component: ForPracComponent;
  let fixture: ComponentFixture<ForPracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForPracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
