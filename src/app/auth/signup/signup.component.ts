import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    const email = form.value.email;
    const pwd = form.value.password;
this.authService.signUp(email, pwd);
this.authService.signIn(email, pwd);
this.router.navigate(['/recipes'])
  }

}
