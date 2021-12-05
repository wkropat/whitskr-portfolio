import React, {useState, useEffect} from 'react';
import Project from './project';
var moment = require('moment'); // require

// Build request URL
const baseURL = `https://api.astronomyapi.com/api/v2/bodies/positions/moon`
const appId = "b7652871-3d9b-41c5-94b3-34898afc0346";//process.env.REACT_APP_ASTRO_APP_ID;
const appSecret = "b7b4ce73652c6f54f008d1ab20713ce886a0f39ce6bf8c0185f522e607b7f775f83e61a0a4e6a1716f3ff2d7d2ea8bb72e166d20d282a8c083428fd194ed2ff427f59def7b666555fd4e7d170defdfadf38926e0b8deb7b95cb7869c9aae789e4f567bb187a6dbc5efcf7c4de001e0b2";//process.env.REACT_APP_ASTRO_APP_SECRET;
const hash = Buffer.from(`${appId}:${appSecret}`).toString('base64')
const header = {
        //   "X-Requested-With": "XMLHttpRequest",
        Authorization: `Basic ${hash}`,
    }

function Main() {
  const [moonData, setmoonData] = useState(null);
  const observer = {
      latitude: "47.6062", //props.lat,
      longitude: "122.3321", //props.long,
      date: moment().format("YYYY-MM-DD")
  };

  useEffect(() => {
      fetchData()
      async function fetchData() {
          //const res = await fetch (baseURL, header, observer);
          const res = await fetch(baseURL, { header }, { observer });
          const data = await res.json()
          setmoonData(data);
          console.log(data);

      }
  }, []);
    return (
    <div>
        <Project />
    </div>
    );
  }


export default Main;