import { useEffect, useState } from 'react';

export default function Home() {
  const [sensorValue, setSensorValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://awesome-garden-test.vercel.app/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSensorValue(data.value); // Ensure your data object has a property called `value`
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='holder'>
      <h1>Awesome Garden 2</h1>

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
