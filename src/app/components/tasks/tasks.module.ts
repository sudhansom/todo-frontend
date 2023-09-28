import { NgModule } from "@angular/core";

import { TasksComponent } from "./tasks.component";

import { EachTaskModule } from "../each-task/each-task.module";


@NgModule({
  declarations: [TasksComponent],
  imports: [EachTaskModule],
  exports: [TasksComponent],
  providers: [],
})

export class TasksModule {}
