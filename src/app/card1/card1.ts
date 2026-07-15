import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { OkosMezo } from '../okos-mezo/okos-mezo';
import { FormsModule } from '@angular/forms';
import { SafeClear } from '../safe-clear';



@Component({
  selector: 'app-form',
  imports: [OkosMezo, FormsModule, SafeClear],
  templateUrl: './card1.html',
  styleUrl: './card1.css',
})
export class Card1 {
  private form =viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{title: string, text: string}>();

  onSubmit(username: string, description: string)
  {
    this.add.emit({title: username,text:description});
    this.form()?.nativeElement.reset()
  }
  onClear()
  {
    this.form().nativeElement.reset();
  }
}

