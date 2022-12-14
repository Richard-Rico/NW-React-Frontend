import '../App.css'
import React, {useState, useEffect} from 'react'

const Posts = () => {

// Komponentin tilan määritys
const [posts, setPosts] = useState([])
const [showPosts, setShowPosts] = useState(false)


useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json()) //muutetaan json data javascriptiksi
  .then(oliot => setPosts(oliot))
},[]
)

  return (
    <>
        <h2 onClick={() => setShowPosts(!showPosts)}>Posts from typicode</h2>

        {
          showPosts && posts && posts.map(p =>

            <div key={p.id} className='posts'>        
        <h4>{p.title}</h4>
        <p>{p.body}</p>
        <h3>Made by a user with id : {p.userId}</h3>
      </div>
            )
        }

    </>
  )
}

export default Posts
