import React from 'react'


const SL = (props) => {
    
    return (
        <div>
            <ul>
                {props.addedItems.map(e => ( 
                    <li key={e.id}>
                    <span>{e.title}</span>
                    <span>{e.amount}</span>
                        
                    <hr></hr>
                    <span>CLICK Times{e.count}</span>
                    </li>
                )
                )
                }
            </ul>
        </div>
    )
}


export default SL