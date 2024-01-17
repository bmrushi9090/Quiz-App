import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup code (if needed)
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {data ? (
        // Render the data
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        // Render loading state or error message
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataFetchingComponent;
