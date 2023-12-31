import { NgModule } from "@angular/core";

import { ErrorComponent } from "./error.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
  }
]

@NgModule({
  declarations: [ErrorComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})

export class RootModule {

}
