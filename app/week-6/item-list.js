import Item from './item.js';
import { useState } from 'react';
import list from './items.json';

export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");

  

    return (
        <ul>
            <Item {...item1} />
            <Item {...item2} />
            <Item {...item3} />
            <Item {...item4} />
            <Item {...item5} />
            <Item {...item6} />
            <Item {...item7} />
            <Item {...item8} />
            <Item {...item9} />
            <Item {...item10} />
            <Item {...item11} />
            <Item {...item12} />
        </ul>
    );
}