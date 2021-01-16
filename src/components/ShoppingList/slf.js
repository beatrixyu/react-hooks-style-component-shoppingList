import React, {useState} from "react"

const SLF = (props) => {
    const [addedTitle, setTitle] = useState('');
    const [addedAmount, setAmount] = useState('')
    const [count, setCount] = useState(0)

const submitHandler = (e)=> {
    e.preventDefault()
   console.log(addedTitle, addedAmount)
    props.onAddNewItemsHandler({
        title: addedTitle,
        amount: addedAmount,
        count:count
   })
}

    return (
        <>
        <form onSubmit={submitHandler}>
            <label htmlFor="title">Title Name</label>
            <input id="title" type="text" value={addedTitle}
                onChange={event=>{setTitle(event.target.value)}}
            ></input>
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" value={addedAmount}
                onChange={event=>{setAmount(event.target.value)}}
                ></input>
            <button type="submit">Add new item</button>

            <button onClick={() => { setCount((prevCount) => (prevCount + 1)) }}>more {count}</button>
            <button onClick={() => { setCount((prevCount) => (prevCount - 1)) }}>less {count}</button>

            </form>


            </>
    )
}

export default SLF