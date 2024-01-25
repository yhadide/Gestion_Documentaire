import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userNameSubject = new BehaviorSubject<string>('');
  private RoleSubject = new BehaviorSubject<string>('');

  userName$ = this.userNameSubject.asObservable();
  Role$ = this.RoleSubject.asObservable();

  setUserNameRole(userName: string, Role:string) {
    this.userNameSubject.next(userName);
    this.RoleSubject.next(Role);
  }
}
