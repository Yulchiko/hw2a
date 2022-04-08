import React, {useEffect, useState} from 'react';
import { usersService} from "../../ІService/userService";

import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import Posts from "../Posts/Posts";

import styles from "./App.module.css";
import {postService} from "../../ІService/postService";
import {usersServiceId} from "../../ІService/userServiceId";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [post, setPosts] = useState([])

    useEffect(() => {
         usersService.getAll()
            .then((({data})=>setUsers(data)));
    }, []);

    const getUserId = async (id) => {
        await usersServiceId.getById(id)
           .then((({data})=>setUser(data)));
                setUserPosts([]);
    };

    const getUserPosts = (id) => {
         postService.getPostsById(id)
             .then((({data}) => setUserPosts(data)));
        setPosts([]);

    };
    return(
        <div className={styles.col}><div className={styles.rot}><div className={styles.user}>
                    { users.map((user) => <User key={user.id} user={user} getUserId={getUserId}/>)}</div>
                { user && (<UserDetails user={user} getUserPosts={getUserPosts}/>)}</div>
            {/*<div>{userPosts &&  <Posts key={post.id} post={post} />}</div>*/}
           {/**/}
           <div>{post && (userPosts.map((post) => <Posts key={post.id} post={post}/>))}</div>
        </div>
    )
}
export default Users;
