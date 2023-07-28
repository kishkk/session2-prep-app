import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualMaintenanceComponent } from './annual-maintenance.component';

describe('AnnualMaintenanceComponent', () => {
  let component: AnnualMaintenanceComponent;
  let fixture: ComponentFixture<AnnualMaintenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualMaintenanceComponent]
    });
    fixture = TestBed.createComponent(AnnualMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
