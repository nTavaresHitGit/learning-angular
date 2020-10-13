import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';


@Component({
  selector: 'app-contentcard',
  templateUrl: './contentcard.component.html',
  styleUrls: ['./contentcard.component.scss']
})
export class ContentcardComponent implements OnInit {
trying: string;

  constructor() {}

  ngOnInit(): void {
  }

}
