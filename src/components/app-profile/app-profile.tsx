import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
// import {  } from '@ionic/core';

import { Champion } from '../../services/heroes';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.scss'
})
export class AppProfile {

  @State() notify: boolean;
  @State() swSupport: boolean;

  @Prop() history: RouterHistory;
  @State() localHero:Champion;

  champtionSplashArtPrefix:string = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
  @State() backgroundSplashArt : string = "";

  componentWillLoad() {

    this.localHero = this.history.location.state.hero;
    var heroName = this.cleanupName(this.localHero.name);
    this.backgroundSplashArt = this.champtionSplashArtPrefix + heroName + "_0.jpg"; //picks the 2nd splash art

  }
  private cleanupName(name:string):string{
    var cleanedName = name.replace(/\s/g, ''); //Replace space with nothing
    cleanedName = cleanedName.replace(/'/g, ''); //Replace apostrophe with nothing
    cleanedName = cleanedName.replace(/\./g,''); //Replace dot with nothing
    if(cleanedName.toLowerCase() == "chogath") cleanedName = "Chogath";
    return cleanedName;
  }

  navigateToMainPage() {
    this.history.replace('/', {});
  }

  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color='dark'>
            <ion-buttons slot="start">
              <ion-button onClick={() =>this.navigateToMainPage()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" height="20" width="20">
                  <path fill="#FFF" d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/>
                </svg>
              </ion-button>
            </ion-buttons>
            <ion-title>{this.localHero.name}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          {/* <background-cover backgroundUrl={this.backgroundSplashArt}></background-cover> */}
          <hero-dmg-stats hero={this.localHero} backgroundUrl={this.backgroundSplashArt}></hero-dmg-stats>
          
        </ion-content>
      </ion-page>
    );

  }
}
