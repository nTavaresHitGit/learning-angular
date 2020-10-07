import {Content} from './content-interface';
export class ContentList {
  static contentCount = 0;
  private contentitems: Content[];
  constructor(contentitem: Content) {
    // initialize first THEN add
    this.contentitems = [];
    this.contentitems[0] = contentitem;
    this.increaseCount();
  }
  get content(): Content[]{
    return this.contentitems;
  }
  increaseCount(): number {
    return ++ContentList.contentCount;
  }

  add(itemz: Content): void{
   this.contentitems.push(itemz);
  }
  displayItems(num: number): string{
    return `<strong>${this.contentitems[num].title}</strong><br><u>${this.contentitems[num].author}</u><br><em>${this.contentitems[num].body}</em><br>`;
  }
}

