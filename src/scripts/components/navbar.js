class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this.isNavDrawerVisible = false;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
            .drawer-link{
                display: flex;
                min-width: 44px; 
                min-height: 44px;
            }
            .navbar {
                position: sticky;
                padding: 20px 0;
                background: #fff;
                color: #2C3333;
                font-size: 25px;
                display: grid;
                grid-template-columns: 1fr auto auto auto auto auto;
                align-items: center;
                z-index: 1000;
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
                
                   
                min-width: 44px; 
                min-height: 44px;
                
            }
    
            label {
                font-size: 25px;
                margin-left: 20px;
            }
    
            #drawerToggle {
                display: inline-block;
                background: none;
                border: none;
                font-size: 25px;
                cursor: pointer;
                min-width: 44px;
                min-height: 44px;
                width: 44px; 
                height: 44px; 
                text-align: center;
            }
        
            .navbar a {
                color: #2C3333;
                text-decoration: none;
                font-size: 18px;
                margin-right: 20px;
                margin-left: 20px;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                transition: all 0.2s ease-in-out;
            }
            
            
            .nav-drawer a {
                margin-top: 30px;
                margin-left: 30px;
                display: flex;
                padding: 0px;
                text-decoration: none;
                width: 44px;
                font-size: 18px;
                height: 44px;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                white-space: nowrap;
            }
            
            .nav-drawer {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                background-color: #fff;
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
                z-index: 2000;
                position: fixed;
                top: 0;
                right: 0;
                height: 100vh;
                top: 0;
                transform: translateX(100%);
                transition: transform 0.8s;
                width: 200px;
                min-width: 44px; 
                min-height: 44px;
            }
    
           
            .nav-drawer.active {
                transform: translateX(0);
                display: flex; 
            }
    
            #drawerToggle {
                display: none; /* Sembunyikan di mode desktop */
            }
    
            .navbar a:hover {
                background-color: #333;
                color: #fff;
                width: 100px;
                height: 30px;
                border-radius: 10px;
                text-align: center;
            }
       
    
            @media (max-width: 768px) {
                label {
                    text-align: center;
                    margin: 0 auto;
                }
                .navbar {
                    grid-template-columns: auto auto auto;
                    align-items: center;
                }
    
                #drawerToggle {
                    display: block;
                }
    
                label {
                    font-size: 25px;
                }
    
                .navbar a {
                    display: none;
                }
    
                .nav-drawer.active .drawer-link {
                    display: block; 
                }           
            }
    
            @media (min-width: 769px) {
                .nav-drawer {
                    flex-direction: row;
                }
    
                label {
                    margin-left: 80px;
                }
    
                .navbar a {
                    margin-right: 80px;
                    white-space: nowrap;
                    
                }
    
                .nav-drawer.active {
                    transform: translateX(0);
                    display: none;
                }
            }
            .style{
                display: block;
                min-width: 44px; 
                min-height: 44px;
            }
            </style>
            <div class="navbar">
            <button id="drawerToggle">&#9776;</button>
                <label>FoodiesFaves.co</label>
                
                <a href="/" class="drawer-link">Home</a>
                <a href="#" class="drawer-link">Favorite</a>
                <a href="https://github.com/nandaazein" target="_blank" class="drawer-link">About Us</a>
                
                <div class="nav-drawer" id="navDrawer">
                    <a href="/" class="drawer-link style">Home</a>
                    <a href="#" class="drawer-link style">Favorite</a>
                    <a href="https://github.com/nandaazein" target="_blank" class="drawer-link style">About Us</a>
                </div>
            </div>
        `;

    const drawerToggle = this.shadowDOM.querySelector('#drawerToggle');
    const navDrawer = this.shadowDOM.querySelector('.nav-drawer');

    drawerToggle.addEventListener('click', () => {
      this.isNavDrawerVisible = !this.isNavDrawerVisible;

      if (this.isNavDrawerVisible) {
        navDrawer.classList.add('active');
      } else {
        navDrawer.classList.remove('active');
      }
    });
  }
}

customElements.define('custom-navbar', Navbar);
