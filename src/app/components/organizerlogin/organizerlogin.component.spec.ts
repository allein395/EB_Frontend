import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerloginComponent } from './organizerlogin.component';

describe('OrganizerloginComponent', () => {
  let component: OrganizerloginComponent;
  let fixture: ComponentFixture<OrganizerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizerloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
