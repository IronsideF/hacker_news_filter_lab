import React from 'react'

const TitleFilter = ({changeTextFilter}) => {
  
    const handleSubmit = (event) => {
        changeTextFilter(event.target.value)
    }
  
    return (

        <input type="text" onChange={handleSubmit} />

  )
}

export default TitleFilter