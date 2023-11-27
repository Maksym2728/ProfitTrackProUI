import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, PasswordModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  formGroup: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = new FormGroup({
      password: new FormControl<string[] | null>(null)
    });
  }

}
