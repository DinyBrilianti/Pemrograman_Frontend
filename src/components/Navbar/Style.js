import StyleNavbar from "styled-components";

const NavbarStyle = StyleNavbar.div`
background-color: #4361ee;
padding: 1rem;
color: #fff;
    nav{
        display: flex;
        flex-direction: column;
        div{
            h1{
                font-size: 2.4rem;
                margin-bottom: 1rem;
            }
            ul{
                display: flex;
                flex-direction: column;
                list-style: none;
                li{
                    margin-bottom: 1rem;
                    a{
                        text-decoration: none;
                        color: #fff;
                    }
                }
            }
            
        }
    }
    @media (min-width: 768px) {
        nav {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          div {
            h1{
                margin-bottom: 0;
            }
            ul{
                flex-direction: row;
                li{
                    margin: 0 1rem; 
                }
            }
          } 
        }
    
      }
      
      /* Large Screen */
      @media (min-width: 992px) {
        /* 
         * Nothing TODO HERE.
         * We haven't styling Navbar.
         */
      }`;
      export default NavbarStyle;