import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  @ViewChild('name') inputName;
  @ViewChild('author') inputAuthor;
  @ViewChild('genre') inputGenre;
  @ViewChild('img') inputImg;
  @ViewChild('body') inputBody;
  // @ViewChild('id') inputId;
  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame: any;
  constructor(private contentService: ContentService, public dialog: MatDialog) {this.newGame = {
    title: '',
    author: '',
    genre: '',
    body: '',
    imgUrl: ''
  };
  }

  ngOnInit(): void {
  }
  openAddGameDialog(): void {
    const gameDialogRef = this.dialog.open(AddContentDialog, {
      width: '400px'
    });
    gameDialogRef.afterClosed().subscribe(newGameFromDialog => {
      this.newGame = newGameFromDialog;
      this.addGame();
    });
  }
  addGame(): void {
    let newGameFromServer: Content;
    console.log('Trying to add the game', this.newGame);
    this.contentService.addGame(this.newGame).subscribe(serverGame => {
      newGameFromServer = serverGame;
      console.log(serverGame);
      this.newGameEvent.emit(newGameFromServer);
    });
    // this.clearFields();
  }
  // clearFields(): void{
  //   this.inputName.nativeElement.value = ' ';
  //   this.inputAuthor.nativeElement.value = ' ';
  //   this.inputBody.nativeElement.value = ' ';
  //   this.inputGenre.nativeElement.value = ' ';
  //   this.inputImg.nativeElement.value = ' ';
  //   // this.inputId.nativeElement.value = ' ';
  // }
}
@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
})
export class AddContentDialog {
  newGame: any;
  constructor(
    public dialogRef: MatDialogRef<AddContentDialog>) {this.newGame = {
    title: '',
    author: '',
    genre: '',
    body: '',
    imgUrl: ''
  };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
