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
      tags: ['ESport, MOBA'],
      imgUrl: 'https://lh3.googleusercontent.com/WebglHOYlW-2P7ADP9oUSSrgy12PHyAE6GP_jmJkQOZZ1XH7Pa_7216EK2qS7iJFvncqOaDjg40BrYdzPbB9qNwn'
    }, {
      id: 1,
      title: 'Ragnarok Online',
      author: 'Nicholas',
      genre: 'MMORPG',
      body: 'Oldie but a goodie',
      tags: ['MMORPG, Community, 2.5D, Top-Down'],
      imgUrl: 'https://assets.primagames.com/media/files/ragnarok-revo-classic-2.png/PRIMA/resize/618x0'
    }, {
      id: 2,
      title: 'Flyff',
      author: 'Nicholas',
      genre: 'MMORPG',
      body:  'This game... will take all of your money. And time.. steer clear.',
      tags: ['Anime MMO, Flying, Guilds, 3D'],
      imgUrl: 'https://www.gamex.ph/nas/goods/G00000000345/G00000000345_6.jpg'
    }, {
      id: 3,
      title: 'World of Warcraft',
      author: 'Nicholas',
      genre: 'MMORPG',
      body:  'Forget about having a life',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/91/WoW_Box_Art1.jpg'
    }, {
      id: 4,
      title: 'Minecraft',
      author: 'Nicholas',
      genre: 'Openworld',
      body:  'One of the best, calming games ever.',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/512dVKB22QL.png'
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
}

