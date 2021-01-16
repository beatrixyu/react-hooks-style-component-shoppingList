import React, {useState, useEffect, useRef} from 'react';
import StyledCard from '../UI/MainCard'
import Input from '../UI/MainInput'
import Button from '../UI/MainButton'
//import './Search.css';

const Search = React.memo(props => {
  const { onLoadingShoppingItems} = props;
  const [enteredFilter, setEnteredFilter] = useState('')
  const inputRef = useRef()
  
  useEffect(() => {
   //set a timeoout funtion, the enterfilter is not current value anymore by the setTimeout, it was the history value happened in 500 millionseconds ago, thats why we need use Ref to compare the current value in the input
   const timer = setTimeout(() => {

      if (enteredFilter === inputRef.current.value) {//inputRef is defined outside of the closure, so it is the current value in the textInput, but the enterdFilter is the history value
        const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`;
         //no need to use setEnteredFilter() in the useEffect
         fetch('https://react-hooks-shopping-list.firebaseio.com/addedItems.json' + query)
         //in the firebase, go to 'real time' database and go to 'rule' 
         .then(response => {
           response.json()
         }).then(responseData => {
           const loadedShoppingItems = [];
           for (const key in responseData) {
             loadedShoppingItems.push({
               id: key,
               title: responseData[key].title,
               amount: responseData[key].amount
             })
           }
           //props.onLoadingShopping(loadedShoppingItems)    // to forward loadingShoppingIems to the parent component which is ShoppingNote.js...
           onLoadingShoppingItems(loadedShoppingItems)  //no need props anymore here, because we use { onLoadingShoppingItems} = props;
         });
        console.log(inputRef.current.value)
  }
}, 500);
    return (
      () => {
    clearTimeout(timer)
  }
)


  },
   // [enteredFilter, props]
   [enteredFilter, onLoadingShoppingItems,inputRef]
  )//use enteredSearch as the dependency means, everytime if the enternedSearch changed, which means the input in the search bar changed, 
  

//   const MainInput = styled.input`
// background: papayawhip;
// &:hover{
//   outline: none;
//   border-color: #ff2058;
//  }
//  &:focus{
//   background: purple;
//  }
// `
  return (
    <section className="search">
      <StyledCard>
        <div className="search-input">
          <label>Filter by Title</label>
         <br></br>
          <input ref={inputRef} type="text" value={enteredFilter}
            //onChange={(event) => { setEnteredFilter(event.target.value) }}
            onChange={event=>setEnteredFilter(event.target.value)}
          />
        </div>
      </StyledCard>
    </section>
  );
});

export default Search;
