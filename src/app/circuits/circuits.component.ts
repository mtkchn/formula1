import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CircuitsService } from '../circuits.service';
interface City {
  name: string,
  code: string
}

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

  

  cities: City[];

  selectedCity1!: City;

  selectedCity2!: City;

  selectedCity3!: string;

  selectedCountry!: string;

  countries!: any[];


  
  responsiveOptions: any;
  constructor(private circuitsService: CircuitsService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

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


