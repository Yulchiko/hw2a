import React from 'react';
import styles from "../Users/App.module.css";

const UserDetails = (props) => {
    const {user, getUserPosts} = props;
    const {id, name, surname, email, address, phone} = user;
    return (
        <div className={styles.name}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <div>email:{email}</div>
            <div className="address">
                address:
                <div>street:{address.street}</div>
                <div>suite:{address.suite}</div>
                <div>city:{address.city}</div>
                <div>zipcode:{address.zipcode}</div>
                          </div>
            <div>phone:{phone}</div>
            <button className={styles.userPost} onClick={() => getUserPosts(user.id)}>get posts</button>
        </div>
    );
};

export default UserDetails;