import { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, onValue } from "firebase/database";

export default function Home() {
  const [sensorValue, setSensorValue] = useState(null);

  // useEffect(() => {
  //   const dbRef = ref(database, 'data');
  //   onValue(dbRef, (snapshot) => {
  //     const value = snapshot.val();
  //     setSensorValue(value);
  //   }, (error) => {
  //     console.error("Error fetching data: ", error);
  //   });
  // }, []);

const url = 'awesome-garden-test.vercel.app/api/data.js'; // Replace with your actual URL

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Process the data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  
  return (
    <div className='holder'>
      <h1>Awesome Garden</h1>

      <div className="device" id="device" style={{"--progress": `${sensorValue !== null ? sensorValue : 0}%`}}>
        <div className="number" id="number">{sensorValue}%</div>
      
        <div className="glass-container">
          <div className="glass"></div>
          <div className="liquid">
            <div className="bg"></div>
            <div className="bubbles"></div>
          </div>
          <div className="glass-reflection"></div>
        </div>
      </div>

    </div>
  );
}
