import React, { useEffect, useState } from "react";

export default function EventHeader() {
    //setstages
    const [searchInput, setSearchInput] = useState('');
    

    //update when event
    let handleChange = (e:any) => {
        setSearchInput(e.target.value)
    }
    //Basket
    
    return (
        <div className="header-container">
            
            
            Basket
        </div>
    )
}



