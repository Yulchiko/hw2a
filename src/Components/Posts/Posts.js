import React from 'react';

const Posts = (post) => {
//const {userId, id, title, body} = post
    return (
        <div>
            <div>{post.userId}</div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default Posts;