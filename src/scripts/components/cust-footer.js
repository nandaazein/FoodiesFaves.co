class AppFooter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
        <style>
          :host {
            bottom: 0;
            width: 100%;
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
            font-size: 0.8em;
            margin-bottom: 0;
          }
        </style>
        <p>&copy; 2023 - FoodiesFaves.co</p>
      `;
  }
}

customElements.define('cust-footer', AppFooter);
