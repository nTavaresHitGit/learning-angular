import { Component } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  awesomesauce = 'The First Class!';
  gameLists: Content[];
  constructor() {
    this.gameLists = [{
      id: 0,
      title: 'League of Legends',
      author: 'Nicholas',
      genre: 'Openworld',
      body: 'This game will eat up all of your time I made this an openworld game for the sake of the assignment',
      tags: ['ESport', 'MOBA'],
      imgUrl: 'League'
    }, {
      id: 1,
      title: 'Ragnarok Online',
      author: 'Nicholas',
      genre: 'MMORPG',
      body: 'Oldie but a goodie',
      tags: ['MMORPG', 'Community', '2.5D', 'Top-Down'],
      imgUrl: 'RO'
    }, {
      id: 2,
      title: 'Flyff',
      author: 'Nicholas',
      genre: 'MMORPG',
      body:  'This game... will take all of your money. And time.. steer clear.',
      tags: ['Anime MMO', 'Guilds', '3D'],
      imgUrl: 'Fly'
    }, {
      id: 3,
      title: 'World of Warcraft',
      author: 'Nicholas',
      genre: 'MMORPG',
      body:  'Forget about having a life',
      imgUrl: 'WOW'
    }, {
      id: 4,
      title: 'Minecraft',
      author: 'Nicholas',
      genre: 'Openworld',
      body:  'One of the best, calming games ever.',
      imgUrl: 'MC'
    }, {
      id: 5,
      title: 'Bonus No Picture',
      author: 'Nicholas',
      genre: 'Openworld',
      body:  'This represents.... School.',
      imgUrl: ''
    }];
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
    this.gameLists.push(newGameFromChild);
    // Cloning list
    this.gameLists = Object.assign([], this.gameLists);
  }
}

