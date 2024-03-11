import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollControllerComponent } from './scroll-controller.component';

describe('ScrollControllerComponent', () => {
  let component: ScrollControllerComponent;
  let fixture: ComponentFixture<ScrollControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
