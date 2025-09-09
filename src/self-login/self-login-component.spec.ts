import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfLoginComponent } from './self-login-component';

describe('SelfLoginComponent', () => {
  let component: SelfLoginComponent;
  let fixture: ComponentFixture<SelfLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
