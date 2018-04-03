import { Component, Prop } from '@stencil/core';
import { Champion, HeroesData } from '../../services/heroes';
import { RouterHistory, ActiveRouter } from '@stencil/router';

@Component({
  tag: 'champion-list',
  styleUrl: 'champion-list.scss'
})
export class ChampionList {
  @Prop() history: RouterHistory;

  @Prop() heroes:Array<Champion>;

  @Prop({ context: 'activeRouter' }) activeRouter: ActiveRouter;

  componentWillLoad(){}

  heroSelected(hero:Champion, event:UIEvent) {
    console.log(hero);
    console.log(event);
    const history: RouterHistory = this.activeRouter.get('history');
    history.push('profile/'+hero.name,{hero:hero});
  }
  render() {
    if(this.heroes) {
      const heroes = this.heroes.map((hero) => {
        return (
          <ion-card class="thumbnail-card" onClick={this.heroSelected.bind(this,hero)}>
            <div class="thumbnail-img">
              <lazy-img src={HeroesData.imagesUrlPrefix + hero.image.full}></lazy-img>
            </div>
            <ion-card-content>
              <ion-card-title>{hero.name}</ion-card-title>
            </ion-card-content>
          </ion-card>
        )
      });
      return (
        <section class="heroes-tiles">
          {heroes}
        </section>
      );
    }
    
  }
}
