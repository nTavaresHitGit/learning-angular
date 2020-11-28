import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {GAMESLIST} from '../helper-files/contentDB';
import {Observable, of} from 'rxjs';
import {MessageService} from '../message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }
  // Synchronous
  // getGames(): Content[] {
   // return GAMESLIST;
 // }

  // Asynchronous
  getGamesObs(): Observable<Content[]>{
    this.messageService.add('Fetched game content!');
    return this.http.get<Content[]>('api/content');
  }
  addGame(game: Content): Observable<Content>{
    console.log('test', game);
    return this.http.post<Content>('api/content', game, this.httpOptions);
  }
}
