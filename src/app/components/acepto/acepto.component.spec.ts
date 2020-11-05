import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptoComponent } from './acepto.component';

describe('AceptoComponent', () => {
  let component: AceptoComponent;
  let fixture: ComponentFixture<AceptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
