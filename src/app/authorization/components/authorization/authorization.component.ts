import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {SignInComponent} from "../sign-in/sign-in.component";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {SelectButtonModule} from "primeng/selectbutton";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [CommonModule, ButtonModule, SignInComponent, SignUpComponent, SelectButtonModule, FormsModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {
  stateOptions: any[] = [{label: 'Sign in', value: 'signIn'}, {label: 'Sign up', value: 'signUp'}];
  choseSign: string = 'signIn';

}
