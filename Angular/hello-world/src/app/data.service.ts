import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[]=["John Mathew",'E354','jm@abc.net']
  info2: string[]=["Rob Wilson",'E673','rw@abc.net']
  info3: string[]=["Rose Adams",'E865','ra@abc.net']

    getInfo1():string[]{
      return this.info1
    }
    getInfo2():string[]{
      return this.info2
    }
    getInfo3():string[]{
      return this.info3
    }

    addInfo(info: string){
      this.info1.push(info)
      this.info2.push(info)
      this.info3.push(info)

      return this.info1
    }

  constructor() { }
}
