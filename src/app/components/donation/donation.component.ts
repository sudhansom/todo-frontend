import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment.prod';

interface IUser {
  userName: string,
  password: string
}

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonationComponent {
  price = 10;
  donation = { items: [
    {
      product: 'https://thumbs.dreamstime.com/b/donate-money-vector-illustration-charity-donation-concept-hand-putting-banknote-box-eps-143816912.jpg',
      name: 'Donation',
      price: this.price * 100,
      quantity: 1,
      id: 1
    },
]}



  constructor(private _http: HttpClient){
  }
  checkout(): void {
    this._http.post('https://stripe-webshop-production.up.railway.app/stripe/checkout', {
      items: this.donation.items
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe(environment.stripePublicKey);
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }
}
