import React, { useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

// As a user:

// When the app starts, I can see all listings.
  // useEffect GET request DONE
// I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
  // DONE
// I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
  // Delete request DONE
// I can search for listings by their name.


function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then(resp => resp.json())
      .then(listingsData => setListings(listingsData))
  }, [])

  function handleDeleteListing(deletedListing) {
    const updateDisplayListings = listings.filter(listing => listing.id !== deletedListing.id)
    setListings(updateDisplayListings)
  }

  return (
    <div className="app">
      <Header setSearch={ setSearch }/>
      <ListingsContainer listings={ listings } search={ search } onHandleDelete={ handleDeleteListing }/>
    </div>
  );
}

export default App;
