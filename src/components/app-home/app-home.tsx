import { Component, State, Prop, Listen } from '@stencil/core';
import { HeroesData, Champion } from '../../services/heroes';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  @State() total: number = 0;
  @State() heroes: Array<Champion>;

  @Prop() history: RouterHistory;

  componentDidLoad() {
    this.loadHeroes();
  }

  async loadHeroes() {
    this.heroes = await HeroesData.getHeroes();
    this.total = this.heroes.length;
    console.log(this.heroes);
  }

  navigateToChampionDetails(champion: Champion) {
    this.history.push("/profile", { chamption: champion });
  }

  @Listen('ionInput')
  async search(ev) {
    this.heroes = await HeroesData.getHeroes();

    const term = ev.detail.target.value;

    this.heroes = this.heroes.filter((hero) =>
      hero.name.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
    this.total = this.heroes.length;
  }


  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color='dark'>
            <ion-title>League of Legends Heroes ({this.total})</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-header>
          <ion-toolbar color='dark'>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <champion-list heroes={this.heroes}></champion-list>
        </ion-content>
      </ion-page>
    );
  }
}
