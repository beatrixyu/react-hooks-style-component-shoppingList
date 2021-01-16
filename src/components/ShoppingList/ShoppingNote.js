import React, {useReducer, useState, useEffect, useCallback, useMemo} from 'react';
//components
import ShoppingListForm from './ShoppingListForm';
import ShoppingList from './ShoppingList'
import Search from './Search';
//styled-component
import MainButton from '../UI/MainButton';
import {ThemeProvider} from 'styled-components'
import AddSearchButton from './AddSearch';
import ErrorModal from '../UI/ErrorModal'


const shoppingItemReducer = (currentItems, action) => { //for filter, addNewItems, delete functions
  switch (action.type) {
    case 'SET':
      return action.addedItems; //an array to replace old items
    case 'ADD':
      return [...currentItems,action.newItem];
    case 'DELETE':
      return currentItems.filter(sh => sh.id !== action.id);   
    default:
      throw new Error('Should not get there') }
}

const httpReducer = (currentHttpState, action) => { //fetch and response function
  switch (action.type) {
    case 'SEND': //related to the fetch POST request
      return { loading: true, error: null};
    case 'RESPONSE':
      return {...currentHttpState, loading: false} //...httpState merges loading and erro objects, if we have a new error, that makes new state override the old state and pull that out and add it to the new httpState
    case 'ERROR':  
      return { loading: false, error: action.errorMessage }
    case 'CLEAR': //clearError function
      return {...currentHttpState, error: null}
    default:
      throw new Error('Should not get there')
  }
  }
  


const ShoppingNote = () => {

  //const [shoppingItems, setShoppingItems] = useState([])
  const [shoppingItems, dispatch] = useReducer(shoppingItemReducer,[])
//initial useReducer to replace all useState hooks, the second object we use empty array because initial array will be empty

  //httpReducer to related to the fetch post request, loading in the response and error in the addNewItemHandler
  // const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null })
  
  //hook to switch the theme between light and dark modes
  const [themeSwitch, setThemeSwitch] = useState('light')

  //hook to add a search bar if click an add button
  const [addSearch, setAddSearch] = useState({ isEmpty: true, isAddSearch: false })
  
  //hook to make the loading 
   const [isLoading, setIsLoading] = useState(false)
  
  // Catch error
  const [error, setError] = useState()

  //runs AFTER every render 
  useEffect(() => {
    console.log('RENDERING ShoppingNote', shoppingItems);
    //set a timeoout funtion
  //   setTimeout(() => {
          //Firebase --> RealTime Database --> catch the xxx.json file --> 
  //   fetch('https://react-hooks-shopping-list.firebaseio.com/addedItems.json')
  //   .then(response => {
    //It returns a promise that resolves with the result of parsing the body text as JSON. A Promise that resolves to a JavaScript object. This object could be anything that can be represented by JSON — an object, an array, a string, a number...
  // response.json()
  //   }).then(responseData => {
  //   const loadedShoppingItems = [];
  //   for (const key in responseData) {
  //     loadedShoppingItems.push({
  //       id: key,
  //       title: responseData[key].title,
  //       amount: responseData[key].amount
  //     })
  //   }
  //   setShoppingItems(loadedShoppingItems) //send request infinate loop
  // })
  //   }, 500);
  
  }, [shoppingItems]) //with the second argument , it runs only once after the first render like componentdidMount

const filterItemsHandler = useCallback(filteredItems=> {
   //setShoppingItems(filteredItems)
   dispatch({type:'SET', addedItems:filteredItems})
//}, [setShoppingItems]) can set setShoppingItems to be the dependency, if filter input changes, then the function will be loaded
},[])

  const addNewItemHandler = useCallback(newItem => {
    //dispatchHttp({type: 'SEND'}) //we use dispatch to replace setLoading
    setIsLoading(true)

    //fetch the url from the firebase real-time database, return a promise
    fetch('https://react-hooks-shopping-list.firebaseio.com/addedItems.json', {
      method: 'POST',
      body: JSON.stringify( newItem ), //write in the browser: to take javascript object or array convert into json string format "":"",
      headers: { 'Content-Type': 'application/json' }  //will turn into javascript object will incoming jason data
    }).then(response => {
    setIsLoading(false)
    //dispatchHttp({type: 'RESPONSE'}) //we use dispatch to replace setLoading

      //response.json is a promise, so need to be returned
      return response.json()//it will extract the body abd convert it from json to normal js code
    }).then(responseData => {
      // 1) need to update existing shopping items, so we use prevItems
      //  setShoppingItems(prevItems => 
      //    [...prevItems,
      // //     // ...take the existing items and add these elements to a new array 
      //      {
      // //       //for firebase id can use name as id
      //        id: responseData.name, //id: Math.random().toString(), responseData is object
      //        ...newItem
      // //       //  newItem object take and add the new values as title and amount
      //      }
      //    ]
      //  )
       dispatch({
         type: "ADD",
         newItem:{id:responseData.name,...newItem}
       })
    }     
    )
  },[])

  const removeItemHandler = useCallback((selectedItemId) => {
    setIsLoading(true)
    //dispatchHttp({type: 'SEND'}) //we use dispatch to replace setLoading

    fetch(`https://react-hooks-shopping-list.firebaseio.com/addedItems/${selectedItemId}.json`,
      {
        method: 'DELETE'
      })
      .then(response => {
        //use response to update the 
        setIsLoading(false);
        //dispatchHttp({type: 'RESPONSE'}) //we use dispatch to replace setLoading
   
        //  setShoppingItems(prevItems => {
        //   prevItems.filter((newItem) => (newItem.id !== selectedItemId))
        //  })

        // more clean & shorter way:====>
        // setShoppingItems(prevItems => prevItems.filter(newItem => newItem.id !== selectedItemId))
        dispatch({ type: 'DELETE', id: selectedItemId })
      })
      .catch(
        error => {
          //  setError('Something is wrong here')
          setIsLoading(false)
          //dispatchHttp({type: 'ERROR', errorMessage: 'Something is wrong here'}) //we use dispatch to replace setLoading

        }
      )
  },[]);
  
   const clearError = useCallback(() => {
     setError(null)
    //  dispatch({type:'CLEAR'})
   },[])

   const shoppingList = useMemo(() => {
      return (
        <ShoppingList addedItems={shoppingItems} onRemoveItem={removeItemHandler}/>
      )
    }, [shoppingItems, removeItemHandler]//when shoppingList is changed, the shoppingList is rended, but the removeHandler is not changed because its wrapped by the useCallback function 
  )
//styling functions
  const themeLight = {
    main: '5rem',
    colorForEverything: "#ff2058",
    alert: "darkorange",
    color1: 'green'
  }
    const themeDark = {
      main: '5rem',
      colorForEverything: "royalblue",
      alert: "darkgreen",
      color1: 'red'
  }  
  
  const changeButtonColor = () => {
    if (themeSwitch === 'light') {
      setThemeSwitch('dark')
    } else {
      setThemeSwitch('light')
    }
  }

  const triggerAddSearch = () => {
      setAddSearch({ isEmpty: false, isAddSearch: true })
  }  



  return (
    <>
    <ThemeProvider theme={themeSwitch === 'light' ? themeLight : themeDark}>
      {/* <MainButton onClick={changeButtonColor}>Switch the Color of the Button</MainButton> */}
        <section className="ingredient-list">

          {/* {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}  */}
         {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
          {/* if httpState.error is true which means some errors happened, then it will show the errorMessage */}

          <h1>Shopping Note</h1>
          <ShoppingListForm
            onAddNewItemHandler={addNewItemHandler}
            // loading={httpState.isLoading}
            loading={isLoading}
          />
          {/* use function addNewItemHandler to grantiee we get the lastest state  */}

          <section>        
         {/* {addSearch.isEmpty && <AddSearchButton addSearchProp={triggerAddSearch} />}  */}
            {/* {addSearch.isAddSearch &&<Search onLoadingShoppingItems={filterItemsHandler} />} */}
            <Search onLoadingShoppingItems={filterItemsHandler} />
            {shoppingList}
        {/* Need to add list here! */}
        {/* items is existing in the component ShoppingList, shoppingItems are the props in the useState hook */}
          </section>
          </section>

        </ThemeProvider>

</>
  );
}

export default ShoppingNote;
