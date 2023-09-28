import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  addBtn$ = this._dataService.showAddBtn$;

  todos$ = new BehaviorSubject<any>([]);

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

  createTodo(newTodo: any){
    this._dataService.createTodo(newTodo).subscribe(console.log);
  }
}
