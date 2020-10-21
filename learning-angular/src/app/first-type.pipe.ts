import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'firstType'
})
export class FirstTypePipe implements PipeTransform {

  transform(game: Content[], dGenre: string): Content[] {
    return game.filter(g => g.genre === dGenre);
  }

}
