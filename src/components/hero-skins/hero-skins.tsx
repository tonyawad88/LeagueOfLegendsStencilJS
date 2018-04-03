import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'hero-skins',
  styleUrl: 'hero-skins.scss'
})
export class HeroSkins {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
