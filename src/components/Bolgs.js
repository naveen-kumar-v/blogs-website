import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Loading } from './Loading';


export default function Bolgs() {

  //consume
  const { loading, posts } = useContext(AppContext);
  console.log(posts)

  return (
    <div className='py-5 '>
      {
        loading ? (<Loading />) : (
          posts && posts.map((post) => (
            <div className='container  mx-auto mt-6 my-4 ms-2 ps-3 p-2 shadow text-start'
              key={post.id}>
              <p className='mb-1 fw-bold'>{post.title}</p>
              <p className='mb-0'>
                By <em>{post.author}</em> on <span className='text-decoration-underline'>{post.category}</span>
              </p>
              <p >Posted on : {post.date}</p>

              <p>{post.content}</p>
              <div className='text-wrap'>
                {
                  post.tags.map((tag, index) => {
                    return <span className=' text-info mx-1 w-100 text-decoration-underline small' key={index}>#{tag}</span>
                  })
                }
              </div>
            </div>
          ))
        )

      }
    </div>
  )
}
