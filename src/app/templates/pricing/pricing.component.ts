import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacksService } from 'src/app/serveces/packs.service';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private packservice : PacksService , private router : Router) { }

  packs : any  
  ngOnInit(): void {
    console.log("hzahahha")

    this.packservice.getAll().subscribe((res)=>{
      this.packs = res
      console.log(res);
      
    } , (err)=>{
      console.log(err);

    })
  }
 
  startOrder(id:string){
    this.router.navigate(["/form"], { queryParams: { id } });
  }

}
