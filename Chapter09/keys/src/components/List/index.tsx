import { useState } from 'react'

const List = () => {
  const [items, setItems] = useState<string[]>(['foo', 'bar'])

  const handleClick = () => {
    const newItems = items.slice()
    newItems.unshift('baz')

    setItems(newItems)
  }

  return (
    <div>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>

      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default List