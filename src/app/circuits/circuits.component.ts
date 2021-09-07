import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CircuitsService } from '../circuits.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit {
  public loading = false;
  public circuits:any;
  public imgs:any;
  public products: string[] = [];
  responsiveOptions: any;
  constructor(private circuitsService: CircuitsService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }
  ngOnInit(): void {
    this.circuits =  JSON.parse(localStorage.getItem("circuits") || '{}').response;
    this.products = this.circuits.map(({ image }: {image: string}) => (image));
    console.log('data : ', this.products);
      // console.log('circuits from localstorage : ',this.circuits);
  }

  fetchcirCuits(){
    console.log('fetchcirCuits')
    this.circuitsService.fetchCircuits().subscribe(data => {
      this.circuits = data;
      this.loading = false;
      localStorage.setItem('circuits',  JSON.stringify(data) );

      console.log('circuits : ', data);
    })
  }
}
