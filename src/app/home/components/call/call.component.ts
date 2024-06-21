import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrl: './call.component.scss'
})
export class CallComponent  implements OnInit {
  panelService=inject(PanelService)

  id:string="";
  call:any;
  isLoading:boolean=false;
  isError:boolean=false;

  constructor(private route: ActivatedRoute) {}

 ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || "" ;
      this.getById();
    });
  }

  getById(){
    this.panelService.getInfoId(this.id).subscribe((res)=>{
      console.log(res);
      this.call=res;
      this.isLoading=true;
    },err=>{
      this.isError=true;
    })
  }
}
