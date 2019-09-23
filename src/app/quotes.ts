export class Quote {
    showDescription: boolean;
    constructor(public id: number,public name: string,public author: string,public description: string,public mediumDate: Date){
      this.showDescription=false;
    }
}
