import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <hr />

                <form action="" method="POST">
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

                <ul className="list-group">
                    {/* simple way */}
                    {this.props.posts.map(post => (
                        <li className="list-group-item">
                            <p>
                                <a href=".">{ post.body }</a>
                            </p>
                            <div>
                                <span>
                                    <cite>&mdash; { post.user.firstName } { post.user.lastName }</cite>
                                    <small className="float-right">Time</small>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}