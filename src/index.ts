import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js'
import '@vaadin/vaadin-core'
import { LitElement, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('app')
export class LoginLayout extends LitElement {

  static get styles() {
    return css`
      .flex-container {

      display: flex;

      justify-content: center;
      align-items: center;
      /* flex-flow: column nowrap; */
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;

      height: 100%;
      padding: 15px;
      gap: 5px;

      }

      .flex-container > div{
      border-radius: 5px;
      padding: 8px;
      }


      .item1 {
      /* flex:0 1 auto; */
      flex-grow:0;
      }

      .item2 {
      /* flex:0 1 auto; */
        flex-grow:0;
      }

    `
  }
  render() {
    return html`
    <div class="flex-container">
        <div class="item1">
          <vaadin-button theme="tertiary" >Github</vaadin-button>
        </div>
      </div>

    `
  }
}
