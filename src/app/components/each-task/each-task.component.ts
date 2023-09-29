import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-each-task',
  templateUrl: './each-task.component.html',
  styleUrls: ['./each-task.component.scss']
})

export class EachTaskComponent {
  @Input() task?: any ;
  @Output() onDelete = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<string>();

  constructor(private _dataService: DataService){}

  deleteTask(id: string){
    if(id === this._dataService.userId$.value){
      this.onDelete.emit(this.task._id);
    }else {
      alert('no permission, this todo is not created by you. ');
    }
  }

  editTask(id: string){
    if(id === this._dataService.userId$.value){
    this.onEdit.emit(this.task._id);
    }else {
      alert('no permission ')
    }
  }
}
