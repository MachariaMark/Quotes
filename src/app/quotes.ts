export class Quotes {
    showDescription: boolean;
    constructor(public id: number,public name: string,public author: string,public description: string){
      this.showDescription=false;
    }
}
