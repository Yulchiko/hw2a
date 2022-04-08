import React from 'react';
import styles from "../Users/App.module.css";

const Posts = ({post}) => {
//const {userId, id, title, body} = post
    return (
        <div className={styles.post}>
            <div>userId: {post.userId}</div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    );
};

export default Posts;