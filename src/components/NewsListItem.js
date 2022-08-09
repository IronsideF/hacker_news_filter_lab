import React from 'react'

const NewsListItem = ({story}) => {
    
    const storyIdUrl = `https://news.ycombinator.com/item?id=${story.id}`

  
    return (<>
    {story.url ? <li><a href={story.url}>{story.title}</a> by: {story.by}</li> : <li><a href= {storyIdUrl}>{story.title}</a> by: {story.by}</li>}
    </>
  )
}

export default NewsListItem