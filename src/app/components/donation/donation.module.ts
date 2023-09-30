import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { DonationComponent } from "./donation.component";

@NgModule({
  declarations: [
    DonationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[DonationComponent],
  providers: [],
  bootstrap: [],
})
export class DonationModule {}
