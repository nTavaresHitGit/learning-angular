export interface Content{
  id: number;
  author?: string;
  genre: string;
  imgUrl: string;
  type?: string;
  title: string;
  body: string;
  tags?: string[];
}
