import { NgModule } from "@angular/core";

import { AddTaskModule } from "../add-task/add-task.module";
import { TasksModule } from "../tasks/tasks.module";

import { MainComponent } from "./main.component";


@NgModule({
  declarations: [MainComponent],
  imports: [AddTaskModule, TasksModule],
  exports: [MainComponent],
  providers: [],
})

export class MainModule {}
