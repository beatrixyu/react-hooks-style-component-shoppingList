import React from 'react';

import './ShoppingList.css';

const ShoppingList = React.memo(props => {
  //use  react memo to render the sjopping list only once
console.log('shopping list component rendering')
  return (
    <section className="ingredient-list">
      <h2>Loaded ShoppingList</h2>
      <ul>
        {props.addedItems.map(sh => (
          <li key={sh.id} onClick={props.onRemoveItem.bind(this, sh.id)}>
            <span>{sh.title}</span>
            <span>{sh.amount}</span>
            <span>x</span>
          </li>
        ))
        }
      </ul>
    </section>
  );
});

export default ShoppingList;
