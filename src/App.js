import React, { useCallback, useEffect, useState } from 'react';
import { Main } from './views/Main';
import firebase from './firebase';
import { useAuth } from './contexts/AuthContext';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const db = firebase.firestore();
  const { signIn } = useAuth();
  // console.log(signIn)

  // const getPosts = () => {
  //   let newPosts = [];
  //   // connect to our posts collections
  //   db.collection('posts').get().then((ourPosts) => {
  //     // loop over posts in the collection
  //     ourPosts.forEach((post) => {
  //       // add the new doc and the doc's key into the list
  //       newPosts.push({ ...post.data(), postId: post.id })
  //     })
  //     // set the state of posts equal to newPosts
  //     setPosts(newPosts);
  //   })
  // }

  // fetch('/api/blog')
  //   .then(res => res.json())
  //   .then(data => {
  //     setPosts(data)
  //   })

  const getPosts = useCallback(() => {
    let newPosts = [];
    // connect to our posts collections
    db.collection('posts').get().then((ourPosts) => {
      // loop over posts in the collection
      ourPosts.forEach((post) => {
        // add the new doc and the doc's key into the list
        newPosts.push({ ...post.data(), postId: post.id })
      })
      // set the state of posts equal to newPosts
      setPosts(newPosts);
    })
  }, [db]);

  useEffect(() => {
    getPosts();
  }, [ getPosts ]);

  return (
    <div>
      <Main signIn={signIn} posts={posts} />
    </div>
  )
}
