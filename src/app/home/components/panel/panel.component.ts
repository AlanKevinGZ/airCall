import { Component, Input, OnInit, inject } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {

  panelService=inject(PanelService)
  calls:any=[];


  constructor(private router: Router){}

  ngOnInit(): void {
    this.panelService.getInfo().subscribe(data => {
      this.calls=data.nodes;
      console.log(this.calls);
      
    }, error => {
      console.error('Error fetching data', error);
    });
  }


  getId(id:string){
    this.router.navigate(['panel/sobre', id]);
  }
}
