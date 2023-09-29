import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

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

  constructor(private _dataService: DataService){}


  wrongUser$ = new BehaviorSubject(false);

  reactiveForm: FormGroup = new FormGroup<any>({});

  cancelLogin(){
    //this.onCancel.emit();
    console.log('cancelled...');
  }

  onSubmit(){
    const user = {...this.reactiveForm.value};
    console.log(user);
    this._dataService.loginUser(user).subscribe(data => {
      console.log(data);
      if(data?.success){
        this._dataService.token$.next(data.token);
        this._dataService.loggedIn$.next(true);
        this._dataService.userId$.next(data.userId);
        this._dataService.userName$.next(data.userName);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('id', data.userId);
        localStorage.setItem('userName', data.userName);
      }
    });
    this.wrongUser$.next(true);

  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl('sudhan1@gmail.com', Validators.required),
      password: new FormControl('poudel1', Validators.required)
    })
  }
}
