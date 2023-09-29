import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent implements OnInit {
  reactiveForm: FormGroup = new FormGroup<any>({});
  @Output() submitBtn = new EventEmitter();
  loggedIn$ = this._dataService.loggedIn$;

  constructor(private _dataService: DataService){}

  onSubmit(){
    const newTodo = {
      title: this.reactiveForm.value.title,
      description: this.reactiveForm.value.description,
      completed: this.reactiveForm.value.completed,
      user: 'abcd',
    }
    console.log(newTodo);
    this.submitBtn.emit(newTodo);

  }

  ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        title: new FormControl(null, Validators.required),
        description: new FormControl(null),
        completed: new FormControl(false),
        user: new FormControl('aaa'),
      })
  }
}
