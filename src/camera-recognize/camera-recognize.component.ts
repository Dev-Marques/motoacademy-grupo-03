import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-camera-recognize-component',
  imports: [],
  templateUrl: './camera-recognize.component.html',
  styleUrl: './camera-recognize.component.css'
})
export class CameraRecognize implements OnInit {
  @ViewChild('video', {static: true}) videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', {static: true}) canvasElement!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    this.initCamera();
  } 

  initCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        const video = this.videoElement.nativeElement;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("Error accessing camera: ", err);
      });
  }

  takePicture() {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const context = canvas.getContext('2d');  
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL('image/png');
      console.log("Captured image data: ", imageData);
    }
  }
}
