import React      from 'react';
import UserHeader from './UserHeader'

const Post = props => {

    return props.posts.map(post => {
        return (
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="header">
                        <h2>{post.title}</h2>
                    </div>
                    <div className="description">
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            </div>
        );
    })
}

export default Post;