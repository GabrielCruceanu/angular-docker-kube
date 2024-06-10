import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT } from '../content';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  public productContent = CONTENT.product;
}
