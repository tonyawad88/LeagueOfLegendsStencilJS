import { Component, Prop } from '@stencil/core';
import { Champion } from '../../services/heroes';

@Component({
  tag: 'hero-dmg-stats',
  styleUrl: 'hero-dmg-stats.scss'
})
export class HeroDmgStats {
  @Prop() hero: Champion;
  @Prop() backgroundUrl: string;

  render() {
    return (
      <div>
        <ion-card>
          <lazy-img src={this.backgroundUrl}></lazy-img>
          <ion-card-content class="card-summary">
            <section class="card-text">
              <h1>{this.hero.name}</h1>
              <h5>{this.hero.title}</h5>
              <p>{this.hero.blurb}</p>
            </section>
          </ion-card-content>
        </ion-card>
        <ion-card>
          <ion-card-header><h3><b>Hero Stats</b></h3></ion-card-header>
          <ion-card-content class="stats-wrapper">
            <section class="stat">
              <img src="../../assets/img/heartbeat.svg" />
              <p>HP: {this.hero.stats.hp} (+{this.hero.stats.hpperlevel} per level)</p>
            </section>
            <section class="stat">
              <img src="../../assets/img/health-care.svg" />
              <p>Health Regen: {this.hero.stats.hpregen} (+{this.hero.stats.hpregenperlevel} per level)</p>
            </section>
            <section class="stat">
              <img src="../../assets/img/katana.svg" />
              <p>Attack Dmg: {this.hero.stats.attackdamage} (+{this.hero.stats.attackdamageperlevel} per level)</p>
            </section>
            <section class="stat">
              <img src="../../assets/img/armor.svg" />
              <p>Armor: {this.hero.stats.armor} (+{this.hero.stats.armorperlevel} per level)</p>
            </section>
            <section class="stat">
              <img src="../../assets/img/attackspeed.svg" />
              <p>Attack Speed: {this.hero.stats.attackspeedoffset} (+{this.hero.stats.attackspeedperlevel}% per level)</p>
            </section>
            <section class="stat">
              <img src="../../assets/img/magicresist.svg" />
              <p>Magic Resist: {this.hero.stats.spellblock} (+{this.hero.stats.spellblockperlevel} per level)</p>
            </section>
            <section class="stat">
              <img src="../../assets/img/movementspeed.svg" />
              <p>Movement Speed: {this.hero.stats.movespeed}</p>
            </section>
          </ion-card-content>
        </ion-card>
      </div>
    );
  }
}
