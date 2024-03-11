import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustofrontComponent } from './custofront.component';

describe('CustofrontComponent', () => {
  let component: CustofrontComponent;
  let fixture: ComponentFixture<CustofrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustofrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustofrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
