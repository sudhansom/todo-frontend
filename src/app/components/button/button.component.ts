import { Component } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  addBtn$ = this._dataService.showAddBtn$;

  constructor(private _dataService: DataService){}

  toogleAddBtn(){
    this._dataService.showAddBtn$.next(!this._dataService.showAddBtn$.value);
  }
}
