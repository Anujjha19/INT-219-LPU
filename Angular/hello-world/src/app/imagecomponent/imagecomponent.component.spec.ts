import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecomponentComponent } from './imagecomponent.component';

describe('ImagecomponentComponent', () => {
  let component: ImagecomponentComponent;
  let fixture: ComponentFixture<ImagecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
