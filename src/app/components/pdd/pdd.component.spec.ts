import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDDComponent } from './pdd.component';

describe('PDDComponent', () => {
  let component: PDDComponent;
  let fixture: ComponentFixture<PDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
