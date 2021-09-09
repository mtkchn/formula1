import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CircuitsService } from '../circuits.service';
import { Circuit, Race } from './circuits.model';
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
  public loading: boolean = false;


  circuits: Circuit[] = [];
  races: Race[] = [];
  drivers: any[] = [];
  public seasons: number[] = [];
  public activeCompetitionId: number = 1;





  selectedCity1!: City;

  selectedCity2!: City;

  selectedCity3!: string;

  selectedCountry!: string;

  countries!: any[];

  selectedProduct1: any;

  table: any;
  driver: any;

  responsiveOptions: any;
  constructor(private circuitsService: CircuitsService) { }

  ngOnInit(): void {
    if (localStorage.getItem("seasons")) {
      this.seasons = JSON.parse(localStorage.getItem("seasons") || '[]').response;
    } else {
      this.fetchSeasons()
    }
    if (localStorage.getItem("circuits")) {
      this.circuits = JSON.parse(localStorage.getItem("circuits") || '[]').response;
      console.log('circuits', this.circuits);
    } else {
      this.fetchCircuits()
    }
  }

  carouselEvent(event: any) {
    this.activeCompetitionId = this.circuits[event.page].competition.id;
    console.log('event', this.activeCompetitionId);

  }

  fatchRaces(event: any) {
    console.log('season : ', event.value);
    this.circuitsService.fatchRaces({ competition: this.activeCompetitionId, season: event.value, type: 'race' }).subscribe(data => {
      console.log('fatchRaces return : ', data);

      this.fatchRankings(data.response[0].id);
      this.loading = false;
    })
    console.log('races : ', this.races);
  }

  fatchRankings(id: any) {
    console.log('fatchDriver event :: ', id);
    // this.circuitsService.fetchDriver({id: id}).subscribe(data => {
    //   this.driver = data.response;
    //   this.loading = false;
    //   localStorage.setItem('driver',  JSON.stringify(data.response) );
    //   console.log('driver from api : ', data.response);
    // })
    this.circuitsService.fatchRankings({ race: id }).subscribe(data => {
      console.log('driver from api : ', data);

      this.races = data.response;
      this.loading = false;
    })


  }

  fatchDriver(id: any) {
    console.log('fatchDriver event :: ', id);
    // this.circuitsService.fetchDriver({id: id}).subscribe(data => {
    //   this.driver = data.response;
    //   this.loading = false;
    //   localStorage.setItem('driver',  JSON.stringify(data.response) );
    //   console.log('driver from api : ', data.response);
    // })
    this.circuitsService.fetchDriver({ id: id }).subscribe(data => {
      console.log('driver from api : ', data);

      this.drivers = data.response;
      this.loading = false;
    })


  }

  changeSelection(event: any) {
    console.log('onRowSelect  :: ', event.data);
    this.fatchDriver(event.data.driver.id);
  }

  fetchCircuits() {
    console.log('fetchcirCuits')
    this.circuitsService.fetchCircuits().subscribe(data => {
      console.log('fetchcirCuits data', data);

      this.circuits = data;
      this.loading = false;
      localStorage.setItem('circuits', JSON.stringify(data));
      console.log('circuits : ', data);
    })
  }

  fetchSeasons() {
    console.log('fetchSeasons')
    this.circuitsService.fetchSeasons().subscribe(data => {
      this.seasons = data;
      this.loading = false;
      localStorage.setItem('seasons', JSON.stringify(data));

      console.log('seasons : ', data);
    })
  }
}


