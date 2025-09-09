import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-self-login-component',
  templateUrl: './self-login-component.html',
  standalone: true,
  imports: [ButtonModule, InputTextModule, DividerModule]
})
export class SelfLoginComponent { }
