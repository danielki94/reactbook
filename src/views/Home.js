import React, { useContext } from 'react';
import { Postlist } from '../components/Postlist';
import { useAuth } from '../contexts/AuthContext';
import { DataContext } from '../contexts/DataProvider';
import firebase from '../firebase';


export const Home = (props) => {
    const {currentUser} = useAuth();
    const { postList, getPosts } = useContext(DataContext);
 

    const addPost = (e) => {
        e.preventDefault();
        const formData = {
            body: e.target.body.value,
            dateCreated: firebase.firestore.Timestamp.fromDate(new Date()),
            dateUpdated: null,
            userId: currentUser.id
        }

        firebase.firestore().collection('posts').add( formData )
            .then((docRef) => {
                getPosts();
                console.log('New record created');
            })
            .catch(err => console.error(err))

        // console.log(formData)
    }

    return (
        <div>
            <h3 style= {{ fontSize: '35px' }}>Home</h3>
            <hr />

            <form onSubmit={ (e) => addPost(e) } action="" method="POST">
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-10">
                            <input className="form-control" type="text" name='body' placeholder="Your blog post here..." />
                        </div>
                        <div className="col-md-2">
                            <input className="btn btn-info btn-block" type="submit" value="Post" />
                        </div>
                    </div>
                </div>
            </form>

            <hr />

            <Postlist posts={postList[0]} />
        </div>
    )
}
