import React, {useState, useEffect} from 'react';

// A function to gather all recent updates
function Updates() {

    // This lets the program know that after render, there is another task
    useEffect(() =>{
        // Retrieve update items
        fetchItems();
    }, []);

    // Grab items via async
    const fetchItems = async () => {
        const data = await fetch('https://api.themoviedb.org/3/updates/get');

        const items = await data.json();

        // Test command to ensure function works
        console.log(items);
    }

  return (
    <div>
        <p>This is the updates page.</p>
    </div>
  );
}

export default Updates;
