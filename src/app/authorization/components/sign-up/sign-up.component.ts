import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {SharedModule} from "primeng/api";

@Component({
  selector: 'app-sign-up',
  standalone: true,
    imports: [CommonModule, ButtonModule, CardModule, SharedModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
