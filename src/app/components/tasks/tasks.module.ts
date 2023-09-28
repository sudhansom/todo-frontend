import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TasksComponent } from "./tasks.component";

import { EachTaskModule } from "../each-task/each-task.module";


@NgModule({
  declarations: [TasksComponent],
  imports: [EachTaskModule, CommonModule],
  exports: [TasksComponent],
  providers: [],
})

export class TasksModule {}
