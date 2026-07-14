import { Component, input, output } from '@angular/core'
import {FormModel} from '../card3/form.model'


@Component({
  selector: 'app-card4',
  imports: [],
  standalone: true,
  templateUrl: './card4.html',
  styleUrl: './card4.css',
  
})
export class Card4 {
  data=input.required<FormModel>()
}
