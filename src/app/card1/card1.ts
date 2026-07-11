import { Component, ElementRef, ViewChild } from '@angular/core';
import { OkosMezo } from '../okos-mezo/okos-mezo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card1',
  imports: [OkosMezo, FormsModule],
  templateUrl: './card1.html',
  styleUrl: './card1.css',
})
export class Card1 {
  @ViewChild("form") form?: ElementRef<HTMLFormElement>;
  onSubmit(usernameElement: string, descriptionElement: string)
  {
    console.log(usernameElement + " " + descriptionElement);
    this.form?.nativeElement.reset()
  }
}
