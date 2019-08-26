import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
token: string;

constructor(private router: Router){}


signUp(email: string, pwd: string){
firebase.auth().createUserWithEmailAndPassword(email, pwd).catch(
error=> console.log(error)

);

}

signIn(email: string, pwd: string){
    firebase.auth().signInWithEmailAndPassword(email, pwd).then(
        response=> {
this.router.navigate(['/']);
firebase.auth().currentUser.getIdToken().then(
(token: string)=>{
this.token = token;
}

);
        }
    ).catch(
        error=> console.log(error)
    );

}

getToken(){
     firebase.auth().currentUser.getIdToken().then(
        (token: string)=>{
        this.token = token;
        }
        
        );
        return this.token;
}

isAuthenticated(){
    return this.token != null
}

logout(){
    firebase.auth().signOut();
    this.token = null;
}

}