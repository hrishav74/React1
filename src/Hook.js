import React, { useState, useMemo } from 'react'
import { Button } from 'react-bootstrap'

function Hook() {


    let [Count, setCount] = useState(1)
    let [Item, setItem] = useState(5)
    let multiMemo = useMemo
        (
            function multiCount() {
                return (Count+2);

            }, [Count]
        )

    return (
        <div style={{backgroundColor: '#ccc' } }>
            <h1>useMemo Hook</h1>
            <h1>multiCount: {multiMemo}</h1>
            <h2>Item: {Item}</h2>
            <Button onClick={() => setCount(Count *Item )}>updateCount</Button><br/><br/>
            <Button onClick={() => setItem(Item + 1)}>updateItem</Button><br/><br/>
            <Button onClick={() =>setCount(1)+setItem(1)}>Reset</Button>
            <br/>
            <br/>

        </div>

    )
}

export default Hook;