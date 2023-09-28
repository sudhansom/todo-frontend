import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header.component";

import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [ButtonModule],
  exports: [HeaderComponent],
  providers: [],
})

export class HeaderModule {}
