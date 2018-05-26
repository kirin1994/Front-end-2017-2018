import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicDetailComponent } from './mechanic-detail.component';

describe('MechanicDetailComponent', () => {
  let component: MechanicDetailComponent;
  let fixture: ComponentFixture<MechanicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
