import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAresComponent } from './status-ares.component';

describe('StatusAresComponent', () => {
  let component: StatusAresComponent;
  let fixture: ComponentFixture<StatusAresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusAresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
