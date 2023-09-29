import { NgModule } from "@angular/core";

import { SvgIconModule } from "src/app/directives/svg-icon";

import { EachTaskComponent } from "./each-task.component";


@NgModule({
  declarations: [EachTaskComponent],
  imports: [SvgIconModule],
  exports: [EachTaskComponent],
  providers: [],
})

export class EachTaskModule {}
