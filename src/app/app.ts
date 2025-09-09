import { Component, signal } from '@angular/core';
import { CameraRecognize } from '../camera-recognize/camera-recognize.component';
import { SelfLoginComponent } from '../self-login/self-login-component';

@Component({
  selector: 'app-root',
  imports: [SelfLoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('moto-recogize');
}
