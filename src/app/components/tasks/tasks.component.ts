import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {
  @Input() tasks$ = new BehaviorSubject<any>([]);
  @Output() onDelete = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<string>();

  deleteItem(id: string){
    this.onDelete.emit(id);
  }

  editItem(id: string){
    this.onEdit.emit(id);
  }

}
