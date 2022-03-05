import {
  Link
} from "react-router-dom";
import './Home.css';

function Home(props) {
  return (
    <div id="app" class="home bg-dark text-secondary px-4 py-5 text-center">

      <div class="py-3">
        <h1 class="display-5 fw-bold text-white"> Find-your-Food</h1>
        <div class="col-lg-6 mx-auto">
          <p class="fs-5 mb-4">Find food recommendations</p>
        </div>
      </div>
      
      <div>
        <div>
          <div><label for="customRange1" class="form-label text-white">Age <span class="badge badge-light">{props.vals.age}</span></label></div>
          <input onChange={(e) => {props.set.setAge(e.target.value)}} type="range" class="form-range w-25" id="customRange1" min="18" max="65" step="1"/>
        </div>

        <div class="mt-2">
          <div class="mt-2"><label for="customRange1" class="form-label text-white">Gender <span class="badge badge-light">{props.vals.gender}</span></label></div>
          <div class="mt-1 mb-3">
            <button type="button" class="btn btn-secondary mx-2" onClick={() => props.set.setGender('M')}>M</button>
            <button type="button" class="btn btn-secondary mx-2" onClick={() => props.set.setGender('F')}>F</button>
          </div>
        </div>

        <div class="mt-2">
          <div class="mt-2"><label for="customRange1" class="form-label text-white">Temperature <span class="badge badge-light">{props.vals.temperature}</span></label></div>
          <input type="range" class="form-range w-25" id="customRange1" onChange={(e) => {props.set.setTemperature(e.target.value)}} min="10" max="40" step="1"/>
        </div>

        <div class="mt-2">
          <div><label for="customRange1" class="form-label text-white">Weather <span class="badge badge-light">{props.vals.weather}</span></label></div>
          <div class="mt-1 mb-3">
            <button type="button" class="btn btn-secondary mx-2" data-bs-toggle="button" autocomplete="off" onClick={() => props.set.setWeather('Sunny')}>Sunny</button>
            <button type="button" class="btn btn-secondary mx-2" data-bs-toggle="button" autocomplete="off" onClick={() => props.set.setWeather('Cloudy')} >Cloudy</button>
            <button type="button" onClick={() => props.set.setWeather('Rainy')} class="btn btn-secondary mx-2" data-bs-toggle="button" autocomplete="off">Rainy</button>
            <button type="button" onClick={() => props.set.setWeather('Snowy')} class="btn btn-secondary mx-2" data-bs-toggle="button" autocomplete="off">Snowy</button>
          </div>
        </div>

        <div class="mt-2">
          <div><label for="customRange1" class="form-label text-white">Time of Day <span class="badge badge-light">{props.vals.time}</span></label></div>
          <input type="range" class="form-range w-25" id="customRange1" onChange={(e) => {props.set.setTime(e.target.value)}} min="0" max="24" step="1"/>
        </div>

        <div class="mt-2 text-center">
          <div><label for="customRange1" class="form-label text-white">Preferred Cooking type</label></div>
          <select class="form-select w-25 mx-auto" onChange={(e) => {props.set.setCuisine(e.target.value)}} aria-label="Default select example">
            <option selected>Choose your cooking type</option>
            <option value="Indian">Indian</option>
            <option value="American">American</option>
            <option value="Thai">Thai</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Cajun">Cajun</option>
            <option value="French">French</option>
            <option value="Russian">Russian</option>
            <option value="Japanese">Japanese</option>
            <option value="Italian">Italian</option>
            <option value="Greek">Greek</option>
            <option value="Mexican">Mexican</option>
            <option value="Spanish">Spanish</option>
            <option value="Korean">Korean</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        <div class="d-grid gap-5 d-sm-flex justify-content-sm-center mt-4 pt-3">
          <Link to="/results">
            <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Find Me Dishes!</button>
          </Link>
        </div>
      </div>

  

    </div>
  );
}

export default Home;
//author@sambitsargam
//author@sambitsargam
//author@sambitsargam
//author@sambitsargam
//author@sambitsargam
