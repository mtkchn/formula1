import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CircuitsService } from '../circuits.service';
import { Circuit, Race, Driver } from './circuits.model';
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
  races: Race[] | undefined;
  driver: Driver[] | undefined;

  public seasons: number[] = [];
  public activeCompetitionId: number = 1;
  selectedSeason: number | undefined;
  selectedProduct1: any;

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
    this.selectedSeason = undefined;
    this.races = undefined;
    this.driver = undefined;
    console.log('event', this.activeCompetitionId);
  }

  fetchCircuits() {
    this.loading = true;

    this.circuitsService.fetchCircuitsApi().subscribe(data => {
      this.circuits = data;
      this.loading = false;
    })
  }

  fetchSeasons() {
    this.loading = true;

    this.circuitsService.fetchSeasonsApi().subscribe(data => {
      this.seasons = data;
      this.loading = false;
    })
  }

  fatchRaces(event: any) {
    this.driver = undefined;
    this.loading = true;
    this.circuitsService.fatchRacesApi({ competition: this.activeCompetitionId, season: event.value, type: 'race' }).subscribe(data => {
      data.response[0]?.id ? this.fatchRankings(data.response[0]?.id) : this.races = [];
      this.loading = false;

      console.log(this.loading);
    })
  }

  fatchRankings(id: any) {
    this.loading = true;
    this.circuitsService.fatchRankingsApi({ race: id }).subscribe(data => {
      this.races = data.response;
      this.loading = false;
    })
  }

  fatchDriver(id: any) {
    this.circuitsService.fetchDriverApi({ id: id }).subscribe(data => {
      this.driver = data.response;
      this.loading = false;
    })
  }

  changeSelection(event: any) {
    this.fatchDriver(event.data.driver.id);
  }


}


