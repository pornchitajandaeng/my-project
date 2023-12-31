import React from "react";
import './MainPage.css';
import { NavLink } from "react-router-dom";

import { useNavigate } from 'react-router-dom';


function MainPage() {

  let navigate = useNavigate();
  const Login = () => {
    
    navigate('/Login')
  }

  return (
    <div>
      <body>
        <nav class="navbar">

          <div class="left">

            <h2>minitest</h2>

          </div>

          <div class="right">

            <input type="checkbox" id="check"></input>

            <label for="check" class="checkBtn">

              <i class="fa fa-bars"></i>

            </label>

            <ul class=".list">

              <li><a href="#">Home</a></li>

              <li><a href="#">About</a></li>

              <li><NavLink to="/sammy">Contact</NavLink></li>

              <button
                onClick={() => Login()}
                type="button" class="btn btn-primary">Login</button>

        
            </ul>


          </div>

        </nav>
        <div class="wallpaper">

          <h3 class="animate-charcter">welcome</h3>
        </div>

        <p align="left" class='imgleft' >
          <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" width="50%" />
        </p>



        <div class=" animation">
          <p align="right" ><img src="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg" width="800" /></p>
        </div>



      </body>
    </div>
  )

}
export default MainPage;