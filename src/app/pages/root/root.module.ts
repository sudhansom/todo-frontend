import { NgModule } from "@angular/core";

import { RootComponent } from "./root.component";
import { RouterModule, Routes } from "@angular/router";

import { HeaderModule } from "src/app/components/header/header.module";
import { MainModule } from "src/app/components/main/main.module";
import { FooterModule } from "src/app/components/footer/footer.module";

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
  }
]

@NgModule({
  declarations: [RootComponent],
  imports: [
    RouterModule.forChild(routes),
    HeaderModule,
    MainModule,
    FooterModule,
  ],
  exports: [RootComponent],
  providers: [],
})

export class RootModule {

}
