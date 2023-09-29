import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { DataService } from "src/app/services/data.service";

import { ITodo } from "src/app/types/types";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent implements OnInit {
  reactiveForm: FormGroup = new FormGroup<any>({});
  @Input() task?: ITodo;
  @Output() submitBtn = new EventEmitter();
  @Output() editBtn = new EventEmitter<ITodo>();
  loggedIn$ = this._dataService.loggedIn$;
  editMode$ = this._dataService.editMode$;

  constructor(private _dataService: DataService){}

  onSubmit(){
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

  ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        title: new FormControl(this.task?.title, Validators.required),
        description: new FormControl(this.task?.description),
        completed: new FormControl(this.task?.completed),
      })
  }
}
