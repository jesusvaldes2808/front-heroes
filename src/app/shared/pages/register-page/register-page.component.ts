import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "@core/services";
import {User} from "@data/interface/user.interface";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  registerForm = this.fb.group({

    name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService
  ) {
  }

  registerUser(): void {

    if (this.registerForm.valid) {
      this._authService.registerUser(this.registerForm.value as User)
        .subscribe({
          next: () => {
            console.log("Usuario registrado correctamente")
          }, error: (err) => {
            console.error("Ocurrio un error")
          }

        })
    }
  }


}
