import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


import {AuthService} from "@core/services";
import {INTERNAL_ROUTES} from "@data/routes/internal.const";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginRequest} from "@data/interface/login-request";
import * as console from "node:console";
import {switchMap, tap, timer} from "rxjs";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent{

  private tokenCheckInterval = 60000;

  loginForm = this.fb.group({

    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private fb: FormBuilder) {

    this.TokenExpired();
  }


  get email() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  onLogin(): void {

    if (this.loginForm.valid) {
      this._authService.loginIn(this.loginForm.value as LoginRequest).subscribe({

        next: (userData) => {
          this._router.navigate([INTERNAL_ROUTES.MODULE_HEROS_DEFAULT, INTERNAL_ROUTES.PAGE_HERO_LIST]);
          this.loginForm.reset();
        },
        error: (err) => {
          console.error("ocurrio un error: ", err);
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }


  }


  private TokenExpired() {

    timer(0,this.tokenCheckInterval)
      .pipe(
        switchMap(()=> this._authService.checkAuthentication()),
        tap( isAuthenticated =>{
          if (!isAuthenticated){

            this._authService.logOut();

            if (this._router.url !== INTERNAL_ROUTES.PAGE_AUTH_LOGIN) {
              this._router.navigate([INTERNAL_ROUTES.MODULE_AUTH_DEFAULT, INTERNAL_ROUTES.PAGE_AUTH_LOGIN]);
            }
          }
        })
      ).subscribe();

  }




}
