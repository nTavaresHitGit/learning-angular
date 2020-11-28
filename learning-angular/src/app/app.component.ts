import {Component, OnInit} from '@angular/core';
import {Content} from './helper-files/content-interface';
import {GAMESLIST} from './helper-files/contentDB';
import {ContentService} from './services/content.service';
import {MessageService} from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  awesomesauce = 'The First Class!';
  gameLists: Content[];
  constructor(private contentService: ContentService, public messageService: MessageService) {
  }

  ngOnInit(): void {
    // this.gameLists = this.contentService.getGames();
    this.contentService.getGamesObs().subscribe(gl => {
      this.messageService.add('Game content Returned!');
      this.gameLists = gl;
    });
  }

  getContentItemTitle(index: number): string{
    return this.gameLists[index].title;
  }
  submitInput(title: string, array: Content[] ): void{
  let i = 0;
  for (const value of array) {
    if (value.title === title) {
      i++;
      console.log('A game with this title exists!');
    }
  }
  if (i === 0){
    console.log('There are no games with this title!');
  }
  }
  addGameToList(newGameFromChild: Content): void {
    console.log('Item coming in', newGameFromChild);
    console.log('Array prior to addition', this.gameLists);
    this.gameLists.push(newGameFromChild);
    // Cloning list
    this.gameLists = Object.assign([], this.gameLists);
    console.log('Array after addition', this.gameLists);
  }
}

