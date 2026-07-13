import { Component } from '@angular/core';
import { FormModel } from './form.model';
import { Card1 } from "../card1/card1";
import { Card4 } from "../card4/card4";

@Component({
  selector: 'app-viewForm',
  imports: [Card1,Card4],
  templateUrl: './card3.html',
  styleUrl: './card3.css',
})
export class Card3 {
  forms:  FormModel[] =[];

  onAdd(formData: {title: string, text: string})
  {
    const form: FormModel = {
      title: formData.title,
      description: formData.text,
      id: Math.random().toString(),
    }
    this.forms.push(form);
  }

}
