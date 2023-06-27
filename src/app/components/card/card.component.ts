import { Component, Input } from '@angular/core';
import {MovieModel} from '../../models/movie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() model!: MovieModel;
}
