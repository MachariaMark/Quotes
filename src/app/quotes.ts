export class Quote {
  showDescription: boolean;
  constructor( 
    public id: number,
    public quote: string, 
    public author: string, 
    public submitter: string, 
    public description: string,
    public mediumDate: Date,) 
    {
    this.showDescription = false;
  }
}
