import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraRecognize } from './camera-recognize.component';

describe('CameraRecognize', () => {
  let component: CameraRecognize;
  let fixture: ComponentFixture<CameraRecognize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameraRecognize]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CameraRecognize);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
