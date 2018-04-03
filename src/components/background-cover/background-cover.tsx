import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'background-cover',
  styleUrl: 'background-cover.scss',
  shadow: true
})
export class BackgroundCover {

  @Prop() backgroundUrl:string;

  render() {
    const backgroundImgStyle = {
      background: "url('" + this.backgroundUrl + "')"
    }
    return (
      <div style={backgroundImgStyle} id="background-img">
        <div class="background-dark-overlay"></div>
      </div>
      
    );
  }
}
