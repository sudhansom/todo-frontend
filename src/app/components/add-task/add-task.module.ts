import { NgModule } from "@angular/core";

import { AddTaskComponent } from "./add-task.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AddTaskComponent],
  imports: [ReactiveFormsModule],
  exports: [AddTaskComponent],
  providers: [],
})

export class AddTaskModule {}
