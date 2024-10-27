import { Component } from '@angular/core';
import { Params, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-routes';
  route: any[] = ["product-detail", "thisIsParameter"];
  queryString: Params = {
    color: "red"
  }
}
