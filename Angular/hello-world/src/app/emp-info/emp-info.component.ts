import { Component, OnInit } from '@angular/core';
import { RecordsService } from "../records.service"

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],

  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit {

    infoReceived1 : string[]=[];
    infoReceived2 : string[]=[];
    infoReceived3 : string[]=[];

    getInfoFromServiceClass2(){
      this.infoReceived2= this.rservice.getinfo2()
    }
    getInfoFromServiceClass1(){
      this.infoReceived1= this.rservice.getinfo1()
    }
    getInfoFromServiceClass3(){
      this.infoReceived3= this.rservice.getinfo3()
    }


  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

}
