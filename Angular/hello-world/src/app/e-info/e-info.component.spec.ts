import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInfoComponent } from './e-info.component';

describe('EInfoComponent', () => {
  let component: EInfoComponent;
  let fixture: ComponentFixture<EInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
