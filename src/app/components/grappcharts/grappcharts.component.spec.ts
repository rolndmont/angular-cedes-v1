import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrappchartsComponent } from './grappcharts.component';

describe('GrappchartsComponent', () => {
  let component: GrappchartsComponent;
  let fixture: ComponentFixture<GrappchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrappchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrappchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
