import { Component } from "@angular/core";
import { PacksService } from "src/app/serveces/packs.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-card-karriery",
  templateUrl: "./card-karriery.component.html",
  styleUrls: ["./card-karriery.component.scss"],
})
export class CardKarrieryComponent {
  list: any = [
    {
      num: "517",
      pack: "Evolution pack",
      prix: "99 DT",
      Total: "89 DT",
      reduction: "-10 DT",
      SousTotal: "99 DT",
    },
  ];
  constructor(private packs : PacksService , private route: ActivatedRoute){}
  pack : any 
  ngOnInit(){
    this.route.queryParams.subscribe((queryParams: any) => {
    this.packs.getById(queryParams.id).subscribe((data : any)=>{
      console.log(data)
      this.pack = data
    })
     })
  }
}
