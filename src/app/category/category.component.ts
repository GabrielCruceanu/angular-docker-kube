import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT } from '../content';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  public categoryContent = CONTENT.category;
}
