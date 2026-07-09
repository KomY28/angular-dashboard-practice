import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OkosMezo } from "./okos-mezo/okos-mezo";
import { Card1 } from "./card1/card1";
import { Card2 } from "./card2/card2";
import { Card3 } from "./card3/card3";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card1, Card2, Card3, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Project07-09');
}
