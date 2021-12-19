import React from 'react'
import CharacterItem from './CharacterItem'

export const CharacterGrid = ({loading , items}) => {
    return loading ? <h1>Loading...</h1> : <section className='cards'>
        {items.map((item)=>
        (<CharacterItem key={item.char_id} item={item}></CharacterItem>)
        )}
        </section>
}
