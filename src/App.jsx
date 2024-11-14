import { useState } from 'react'
import { PostComponent } from './post'

function App() {
  const [posts ,setposts] = useState([]);

  const postcomponents = posts.map(post => <PostComponent
    name= {post.name}
    subtitle = {post.subtitle}
    time = {post.time}
    image = {post.image}
    description = {post.description}
  />)

  function addpost(){
    setposts ([...posts,{
      name: "satish",
      subtitle: "web develpoer",
      time: "1:00 PM ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s",
      description: "hii satish"
    }])
  }

  return (
    <div style={{background: "gray", height: "100hv"}}>
      <button onClick={addpost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center"}}>
      <div>
      {postcomponents}
      </div>
    </div>
    </div>
  )
    
  
}
export default App

