class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
            .jumbotron {
                position: relative;
                text-align: center;
                z-index: 1;
                margin-bottom: 20px; 
              }
              
              img {
                width: 100%;
                height: auto;
                object-fit: contain;
                transition: transform 0.2s;
                box-sizing: border-box;
              }
              
              .centered-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.7);
                padding: 30px;
                border-radius: 10px;
                text-align: center;
                color: #2C3333;
                width: 80%;
              }

                .centered-content h1 {
                    font-size: 36px;
                    margin: 10px 0;
                }

                .centered-content p {
                    font-size: 24px;
                    margin: 10px 0;
                }

                @media screen and (min-width: 1200px) {
                    img {
                        min-width: 1000px;
                        margin: 0 auto;
                    }
                    
                }

                @media screen and (max-width: 1199px) {
                    img {
                        min-width: 100%;
                    }

                    .centered-content {
                        padding: 15px; 
                        width: 90%;
                      }

                    .centered-content h1 {
                        font-size: 25px;
                    }

                    .centered-content p {
                        font-size: 20px;
                    }
                }

                @media screen and (max-width: 768px) {
                    .jumbotron {
                        margin-bottom: 10px; 
                      }
                    .centered-content {
                        width: 100%;
                        padding: 5px;
                        display: block;
                        justify-content: center;
                        align-items: center;
                    }

                    .centered-content h1 {
                        font-size: 15px;
                        margin: 5px 0;
                    }

                    .centered-content p {
                        font-size: 12px;
                        margin: 5px 0;
                    }
                }
            </style>
            <div class="jumbotron">
              <picture>
                <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg"><img src='./images/hero-image_2-large.jpg' alt="Hero Images">
              </picture>
              <div class="centered-content">
                <h1>Welcome to FoodiesFaves.co</h1>
                <p>Discover amazing Restaurants here.</p>
              </div>
            </div>
        `;
  }
}

customElements.define('cust-jumbotron', Jumbotron);
