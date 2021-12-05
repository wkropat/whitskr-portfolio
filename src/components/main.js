import React, {useState, useEffect} from 'react';
import Project from './project';
var moment = require('moment'); // require

// Build request URL
const baseURL = `https://api.astronomyapi.com/api/v2/bodies/positions/moon`
const appId = "66850e56-0f2b-4e50-8a0d-439fb6b3db30";//process.env.REACT_APP_ASTRO_APP_ID;
const appSecret = "b7b4ce73652c6f54f008d1ab20713ce886a0f39ce6bf8c0185f522e607b7f775f83e61a0a4e6a1716f3ff2d7d2ea8bb72e166d20d282a8c083428fd194ed2ff448cda3fb039d5f92635320602a3a4f85c1f02c2dfe65b4bfcc4e996ae730dc1901b557ed08c32947985b8dc6c2848e00";//process.env.REACT_APP_ASTRO_APP_SECRET;
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
          const res = await fetch (baseURL, header, observer);
          // const res = await fetch(baseURL, { header }, { observer });
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