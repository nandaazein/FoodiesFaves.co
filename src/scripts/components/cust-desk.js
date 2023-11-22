/* eslint-disable linebreak-style */
class Desk extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
            <style>
                .container {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    grid-gap: 10px;
                }

                .item {
                    margin: 10px;
                }

                .left {
                    font-size: 30px;
                    color: #333;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .right {
                    text-align: justify;
                    color: #333;
                    margin: 20px;
                }

                .right p {
                    margin-bottom: 20px;
                }

                .button {
                    display: block;
                    width: 97%;
                    padding: 10px;
                    background-color: #333;
                    color: #fff;
                    text-align: center;
                }

                .button a:hover {
                    background-color: #7D7C7C;
                }

                @media (max-width: 768px) {
                    .container {
                        grid-template-columns: 1fr; 
                    }
                    .left {
                        font-size: 20px; 
                    }
                }
            </style>
            <div class="container">
                <div class="item left">
                    <p>FoodiesFaves.co</p>
                </div>
                <div class="item right">
                    <p>Welcome to FoodiesFaves.co, your ultimate destination for exploring a diverse culinary world. Delve into a gastronomic journey and discover a multitude of amazing restaurants offering a rich tapestry of flavors and dining experiences. Whether you're seeking a cozy cafe, an exquisite fine-dining establishment, or a hidden gem for street food, FoodiesFaves.co is your go-to platform to savor and share your culinary discoveries.</p>
                    <p class="button">Explore Now</>
                </div>
            </div>
        `;
  }
}

customElements.define('cust-desk', Desk);
