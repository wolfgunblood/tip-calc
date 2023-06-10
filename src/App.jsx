import React from 'react';
import "./App.scss";

const App = () => {
  return (
    <div className='app'>
      <div className='tips-input-container'>
        <label htmlFor="bill">
          Bill
          <input id='bill' type="text"  />
        </label>
        <div className='tip-percentage-container'>
          Select Tip Percentage
          <ul>
            <li>
              <button className='tip-percentage-btn' value='0'>5%</button>
            </li>
            <li>
              <button className='tip-percentage-btn' value='0'>10%</button>
            </li>
            <li>
              <button className='tip-percentage-btn' value='0'>15%</button>
            </li>
            <li>
              <button className='tip-percentage-btn' value='0'>25%</button>
            </li>
            <li>
              <button className='tip-percentage-btn' value='0'>50%</button>
            </li>
            <li>
              <input type="number" name="tip-percentage" id="tip-percentage" />
            </li>
          </ul>
        </div>
        <label htmlFor="people">
          Number of People
          <input type="number" name="people" id="people" />
        </label>
      </div>
      <div className='tips-output-container'>
        <div>
          <p>Tip Amount <br /> /person</p>
          <h1>$0.00</h1>
        </div>
        <div>
          <p>Tip Amount <br /> /person</p>
          <h1>$0.00</h1>
        </div>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default App