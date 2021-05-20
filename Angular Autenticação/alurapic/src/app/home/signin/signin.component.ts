import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDeterctorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDeterctorService){ }

  ngOnInit() { 
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.platformDetectorService.isPlatformBrowser() && 
      this.userNameInput.nativeElement.focus();
  }

  login() {

      const userName = this.loginForm.get('userName').value;
      const password = this.loginForm.get('password').value;

      return this
        .authService.authenticate(userName, password)
        .subscribe(
          () => this.router.navigate(['user', userName]),
          err => {
            console.log(err);
            this.loginForm.reset();
            this.platformDetectorService.isPlatformBrowser() && 
              this.userNameInput.nativeElement.focus();
            alert('Usuário inválido');
          }
        );
  };
  
}
