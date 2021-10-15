import React, {useState, useEffect} from 'react';

function Shop() {

    useEffect(() =>{
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');

        const items = await data.json();
        console.log(items);
    }



  return (
    <div>
        <p>This is the shop page.</p>
    </div>
  );
}

export default Shop;
