import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentList} from '../helper-files/content-list';

@Component({
  selector: 'app-contentcard',
  templateUrl: './contentcard.component.html',
  styleUrls: ['./contentcard.component.scss']
})
export class ContentcardComponent implements OnInit {
trying: string;

  constructor() {
    const personOne: Content = {
      author: 'Nicholas', body: 'My piece of content', id: 0, title: 'Personal'
    };
    const personTwo: Content = {
      author: 'Shawn', body: 'My brothers piece of content', id: 1, title: 'Family'
    };
    const personThree: Content = {
      author: 'Kim', body: 'My mothers piece of content', id: 2, title: 'Family'
    };
    const personFour: Content = {
      author: 'Bert', body: 'My Dads piece of content', id: 0, title: 'Family'

    };
    let newContentList: ContentList;
    newContentList = new ContentList(personOne);
    newContentList.add(personTwo);
    newContentList.add(personThree);
    newContentList.add(personFour);

    this.trying = newContentList.displayItems(0) + newContentList.displayItems(1) + newContentList.displayItems(2) + newContentList.displayItems(3);

  }

  ngOnInit(): void {
  }

}
