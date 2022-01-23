import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onHandleDelete, search }) {
  const searchListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
  
  const displayListings = searchListings.map(listing => {
    return(
      <ListingCard 
        key={ listing.id } 
        listing={ listing }
        onHandleDelete={ onHandleDelete }
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        { displayListings }
      </ul>
    </main>
  );
}

export default ListingsContainer;
