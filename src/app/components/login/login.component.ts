import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, OnDestroy, OnInit, signal, effect } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

interface IUser {
  userName: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @Output() onCancel = new EventEmitter();
  @Output() onLoggedIn = new EventEmitter();

  constructor(){}


  wrongUser$ = new BehaviorSubject(false);

  reactiveForm: FormGroup = new FormGroup<any>({});

  cancelLogin(){
    //this.onCancel.emit();
    console.log('cancelled...');
  }

  onSubmit(){
    const user = {...this.reactiveForm.value};
    console.log('user Details: ', user);

  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }
}
