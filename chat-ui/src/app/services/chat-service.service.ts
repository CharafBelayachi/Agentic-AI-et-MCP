import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface ChatMessage {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private apiUrl = 'http://localhost:8066';

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<string> {
    const formData = new FormData();
    formData.append('query', message);

    return this.http.post(`${this.apiUrl}/chat`, formData, {
      responseType: 'text'
    });
  }
}
