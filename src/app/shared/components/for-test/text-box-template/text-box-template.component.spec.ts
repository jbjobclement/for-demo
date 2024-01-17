import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxTemplateComponent } from './text-box-template.component';

describe('TextBoxTemplateComponent', () => {
  let component: TextBoxTemplateComponent;
  let fixture: ComponentFixture<TextBoxTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TextBoxTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBoxTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
