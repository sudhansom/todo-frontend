import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-each-task',
  templateUrl: './each-task.component.html',
  styleUrls: ['./each-task.component.scss']
})

export class EachTaskComponent {
  @Input() task?: any ;
}
