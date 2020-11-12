import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @ViewChild('name') inputName;
  @ViewChild('author') inputAuthor;
  @ViewChild('genre') inputGenre;
  @ViewChild('img') inputImg;
  @ViewChild('body') inputBody;
  @ViewChild('id') inputId;
  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame: Content;
  constructor() {this.newGame = {
      id: 0,
      title: '',
      author: '',
      genre: '',
      body: '',
      imgUrl: ''
    };
  }

  ngOnInit(): void {
  }
  addGame(): void{
    const promise = new Promise((success, fail) => {
      if (this.newGame) {
        this.newGame.id = +this.newGame.id;
        this.newGameEvent.emit(this.newGame);
        success('Game added!');
        this.clearFields();
      } else {
        fail('Game failed to be added :(');
      }
    });
    promise.then((successResult: string) => {
      console.log('Success!', successResult, this.newGame.title);
    }).catch((failResult: string) => console.log('Failure!', failResult));
  }
  clearFields(): void{
  this.inputName.nativeElement.value = ' ';
  this.inputAuthor.nativeElement.value = ' ';
  this.inputBody.nativeElement.value = ' ';
  this.inputGenre.nativeElement.value = ' ';
  this.inputImg.nativeElement.value = ' ';
  this.inputId.nativeElement.value = ' ';
  }
}

