import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {GAMESLIST} from '../helper-files/contentDB';
import {Observable, of} from 'rxjs';
import {MessageService} from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }
  // Synchronous
  // getGames(): Content[] {
   // return GAMESLIST;
 // }

  // Asynchronous
  getGamesObs(): Observable<Content[]>{
    this.messageService.add('Fetched game content!');
    return of(GAMESLIST);
  }
}
