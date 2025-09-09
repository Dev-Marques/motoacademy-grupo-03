import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CameraRecognize } from '../camera-recognize/camera-recognize.component';

@Component({
  selector: 'app-root',
  imports: [CameraRecognize],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('moto-recogize');
}
