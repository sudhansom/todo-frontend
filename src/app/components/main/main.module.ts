import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddTaskModule } from "../add-task/add-task.module";
import { TasksModule } from "../tasks/tasks.module";
import { DonationModule } from "../donation/donation.module";

import { MainComponent } from "./main.component";


@NgModule({
  declarations: [MainComponent],
  imports: [AddTaskModule, TasksModule, CommonModule, DonationModule],
  exports: [MainComponent],
  providers: [],
})

export class MainModule {}
