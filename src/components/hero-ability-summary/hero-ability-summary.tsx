import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'hero-ability-summary',
  styleUrl: 'hero-ability-summary.scss'
})
export class HeroAbilitySummary {
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
