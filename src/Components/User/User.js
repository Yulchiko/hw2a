import React from 'react';
import styles from "../Users/App.module.css";

const User = (props) => {
    const {getUserId, user} = props;
    const {id, name, username, email} = user;
    return (
        <div>
            {id}. {name} -- {username}, {email}
            <button className={styles.button} onClick={()=>getUserId(id)}> GetDetails </button>
        </div>
    );
};

export default User;
