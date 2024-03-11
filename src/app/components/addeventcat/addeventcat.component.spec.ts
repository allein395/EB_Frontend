import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeventcatComponent } from './addeventcat.component';

describe('AddeventcatComponent', () => {
  let component: AddeventcatComponent;
  let fixture: ComponentFixture<AddeventcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddeventcatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddeventcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
