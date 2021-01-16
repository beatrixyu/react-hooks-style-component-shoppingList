import React, { useState } from 'react';
import SLF from "./slf";
import SL from "./sl.js"

export const SN=()=> {
    const [shoppingNewItems, setShoppingNewItems] = useState([])

    const addNewItemsHandler = (newAddedItem,newAddedCount) => {
        setShoppingNewItems((prevItems) => 
          ([...prevItems,
            {
                    id: Math.random().toString(),
                ...newAddedItem,
                    ...newAddedCount
                },
            
            ])
            )
    }
    

    return (
        <div className="App">
            <SLF
                onAddNewItemsHandler={addNewItemsHandler} 
            ></SLF>
            <SL addedItems={shoppingNewItems} ></SL>
        </div>
    );
}


