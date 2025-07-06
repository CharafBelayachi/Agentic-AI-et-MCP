import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChatComponentComponent} from "./components/chat-component/chat-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='chat-ui';
}
