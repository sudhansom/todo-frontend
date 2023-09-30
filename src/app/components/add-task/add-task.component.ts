import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { BehaviorSubject, Subscription } from "rxjs";
import { DataService } from "src/app/services/data.service";

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { PlatformLocation } from '@angular/common';

import { ITodo } from "src/app/types/types";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  private clearPopListener = this.platformLocation.onPopState(() => {
    this.ref.close();
  });

  reactiveForm: FormGroup = new FormGroup<any>({});
  @Input() task?: ITodo;
  @Output() submitBtn = new EventEmitter();
  @Output() editBtn = new EventEmitter<ITodo>();
  loggedIn$ = this._dataService.loggedIn$;
  editMode$ = this._dataService.editMode$;
  showProgress$ = new BehaviorSubject(false);

  constructor(
    private dialogService: DialogService,
    private platformLocation: PlatformLocation,
    public ref: DynamicDialogRef,
    private _dataService: DataService,
  ){}

  onSubmit(){
    if(this._dataService.loggedIn$.value){
      this.showProgress$.next(true);
      const newTodo = {
      title: this.reactiveForm.value.title as string,
      description: this.reactiveForm.value.description as string,
      completed: this.reactiveForm.value.completed as boolean,
    }
      if(this.editMode$.value){
        this.editBtn.emit({...newTodo, _id:this.task?._id});
      }else {
        this.submitBtn.emit(newTodo);
      }
    }
    else {
      this.openModal();
    }
  }

  ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        title: new FormControl(this.task?.title, Validators.required),
        description: new FormControl(this.task?.description),
        completed: new FormControl(this.task?.completed),
      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.clearPopListener();
  }

  openModal(){
    this.ref = this.dialogService.open(LoginComponent, {
      contentStyle: { overflow: 'auto', padding: '20px', 'border-radius': '5px', 'background-color': 'rgb(236, 233, 233)', 'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'},
      showHeader: false,
      modal: true,
      dismissableMask: true,
      style: {
        minWidth: '300px',
      },
      // data: {
      //   item: item,
      //   allPersons: this.data$.getValue(),
      //   description: `You can modify ${item?.name}'s details, add , update or delete children`,
      // }
    });
  }
}
