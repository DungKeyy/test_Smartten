import React from 'react';

const Tab = (setTab) => {

    const handleTabSearch = (event) =>{
        setTab(true);
    }

    const handleTabFavourites = (event) =>{
        setTab(false);
    }

    return (
        <div>
            <div onClick={handleTabSearch}>Search</div>
            <div onClick={handleTabFavourites}>Favourites</div>
        </div>
    )
}

export default Tab;