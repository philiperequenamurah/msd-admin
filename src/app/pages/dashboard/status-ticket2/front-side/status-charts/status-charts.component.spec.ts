import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusChartsComponent } from './status-charts.component';

describe('StatusChartsComponent', () => {
  let component: StatusChartsComponent;
  let fixture: ComponentFixture<StatusChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
