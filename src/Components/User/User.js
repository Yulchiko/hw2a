import React from 'react';

const User = (props) => {
    const {getUserId, user} = props;
    const {id, name, username, email} = user;
    return (
        <div>
            {id}. {name} -- {username}, {email}
            <button onClick={()=>getUserId(id)}> GetDetails </button>
        </div>
    );
};

export default User;
