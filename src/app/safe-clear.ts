import { Directive, output } from '@angular/core';

@Directive({
  selector: '[appSafeClear]',
  standalone: true,
  host: {
    '(click)': 'onConfirmClear($event)'
  },
  
})
export class SafeClear {
  confirm=output<void>();
  onConfirmClear(event: MouseEvent)
  {
    const wantsToClear= window.confirm("Biztos kiakarok törölni az űrlap adatait?");
    if(wantsToClear)
    {
      this.confirm.emit();
    }
    event.preventDefault();
  }
}
