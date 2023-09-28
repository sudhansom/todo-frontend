import { Component, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {
  @Input() tasks$ = new BehaviorSubject<any>([]);
}
