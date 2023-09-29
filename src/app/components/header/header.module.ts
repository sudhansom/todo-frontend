import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";

import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [ButtonModule, CommonModule],
  exports: [HeaderComponent],
  providers: [],
})

export class HeaderModule {}
