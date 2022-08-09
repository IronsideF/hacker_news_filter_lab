import React from 'react'
import NewsListItem from './NewsListItem'

const NewsList = ({topStories, incrementOffset, decrementOffset, offset, filteredStories, textFilter}) => {
    let storyNodes;
    if (textFilter){
        storyNodes = filteredStories.map((story) => <NewsListItem key={story.id} story={story}/>)
    } else {
        storyNodes = topStories.map((story, i) => <NewsListItem key={i} story={story}/>)
    }

    const displayNodes = storyNodes.slice(offset, (offset+30));
    const handleIncrement = () => {
        incrementOffset();
    }
    const handleDecrement = () => {
        decrementOffset();
    }
    let lessFlag = false;
    if (offset >=30){
        lessFlag = true
    }
    return (
    <>
        {displayNodes.length ? <ul>{displayNodes}</ul> : <h2>No Results Found</h2>}
        <button onClick={handleIncrement}>More</button>
        {lessFlag ? <button onClick={handleDecrement}>Less</button> : null}
    </>
  )
}

export default NewsList