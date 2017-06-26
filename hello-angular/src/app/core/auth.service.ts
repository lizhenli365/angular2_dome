import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(username: string): boolean {
    if(username === 'lizhenli')
        {
          return true;
         }
        else{
              return false;
             }
  }

}
