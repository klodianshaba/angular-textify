import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextifyComponent } from './textify.component';

describe('TextifyComponent', () => {
  let component: TextifyComponent;
  let fixture: ComponentFixture<TextifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
