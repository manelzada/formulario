import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaAngularComponent } from './alerta-angular.component';

describe('AlertaAngularComponent', () => {
  let component: AlertaAngularComponent;
  let fixture: ComponentFixture<AlertaAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
