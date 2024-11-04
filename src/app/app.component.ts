import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
      <div class="w-full h-screen grid grid-cols-4 grid-rows-3 p-5 bg-black text-white">
        <div class="col-span-3 row-start-1 row-end-3 text-center border-solid border-2 border-indigo-600">game</div>
        <div class="col-span-1 row-start-1 row-end-3 text-center border-solid border-2 border-blue-500">guesses</div>
        <div class="col-start-1 col-end-5 border-solid border-2 border-red-500">keyboard graphic</div>

      </div>
  `
})
export class AppComponent {
  title = 'hangman';
}
