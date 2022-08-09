import React, { useEffect, useState } from 'react'
import NewsList from '../components/NewsList'
import TitleFilter from '../components/TitleFilter'

const NewsContainer = () => {
  

    const [topStories, setTopStories] = useState([])
    const [storiesIds, setStoriesIds] = useState([])
    const [textFilter, setTextFilter] = useState(null)
    const [offset, setOffset] = useState(0)
    const [filteredStories, setFilteredStories] = useState([])

   const incrementOffset = () => (
    setOffset(offset+30)
   )
   const decrementOffset = () => {
    if (offset >=30){
    setOffset(offset-30)}
   }
   const changeTextFilter = (text) => {
    setTextFilter(text)
   }

    const populateTopStories = (array) => {
        const storyPromises = array.map((item) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`).then(res => res.json())
        })
        Promise.all(storyPromises).then(data => setTopStories(data))
    }

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then(res => res.json()).then((data)=>setStoriesIds(data))
        
    }, []);
//     useEffect(()=> {
//         populateTopStories(storiesIds.slice(offset, (offset+30)))
// }, [storiesIds, offset]);

useEffect(()=> {
    populateTopStories(storiesIds)
}, [storiesIds, offset]);

useEffect(()=> {
    setFilteredStories(topStories.filter((story) => story.title.match(textFilter)))
}, [textFilter])




  
  
    return (
        <>
        <TitleFilter changeTextFilter={changeTextFilter} />
    <NewsList topStories={topStories} filteredStories={filteredStories} incrementOffset={incrementOffset} decrementOffset={decrementOffset} offset={offset} textFilter={textFilter}/>
    </>
  )
}

export default NewsContainer