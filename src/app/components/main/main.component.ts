import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { ITodo } from "src/app/types/types";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  addBtn$ = this._dataService.showAddBtn$;

  todos$ = new BehaviorSubject<ITodo[]>([]);
  currentTodo?:ITodo;

  constructor(private _dataService: DataService){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this._dataService.getAllTodos().subscribe(data => {
      console.log(data);
      this.todos$.next(data.todos);
    })
  }

  createTodo(newTodo: ITodo){
    this._dataService.createTodo(newTodo).subscribe(data => {
      this.fetchData();
      this._dataService.showAddBtn$.next(true);
    });
  }

  deleteItem(id: string) {
    this._dataService.deleteTodo(id).subscribe(data => {
      console.log('main', data);
      this.fetchData();
    })
  }

  editItem(id: string) {
    this.currentTodo = this.todos$.value.find(item => item._id === id)
    this._dataService.showAddBtn$.next(!this._dataService.showAddBtn$.value);
  }
}
