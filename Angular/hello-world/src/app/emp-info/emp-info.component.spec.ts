import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpInfoComponent } from './emp-info.component';

describe('EmpInfoComponent', () => {
  let component: EmpInfoComponent;
  let fixture: ComponentFixture<EmpInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
