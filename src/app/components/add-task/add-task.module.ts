import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { LoginModule } from "../login/login.module";

import { AddTaskComponent } from "./add-task.component";

@NgModule({
  declarations: [AddTaskComponent],
  imports: [ReactiveFormsModule, LoginModule, CommonModule],
  exports: [AddTaskComponent],
  providers: [],
})

export class AddTaskModule {}
