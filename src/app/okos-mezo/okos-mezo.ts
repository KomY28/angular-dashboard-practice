import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-okos-mezo',
  imports: [],
  templateUrl: './okos-mezo.html',
  styleUrl: './okos-mezo.css',
})
export class OkosMezo {

  cimke = input.required<string>();
}
