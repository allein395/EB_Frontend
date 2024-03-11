import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeventcatComponent } from './listeventcat.component';

describe('ListeventcatComponent', () => {
  let component: ListeventcatComponent;
  let fixture: ComponentFixture<ListeventcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeventcatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeventcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
