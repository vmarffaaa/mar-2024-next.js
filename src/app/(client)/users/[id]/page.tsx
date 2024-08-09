import React, {FC} from 'react';
import Link from "next/link";
import style from "@/components/user/UserComponent.module.css"


interface IProps {
    searchParams?: {
        data?: string,
    };
}

const UserPage: FC<IProps> = ({searchParams}) => {
    let user;
    if (searchParams && searchParams.data) {
        user = JSON.parse(searchParams.data);
        console.log(user, '!!!!');
    }
    return (
        <div className={style.box}>
            <h3>{user.id}. {user.name}</h3>
            <p>Username: {user.username}</p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <button>
                <Link className={style.link} href={{pathname: '/users/' + user.id + '/posts', query: {id: user.id}}}>Show posts</Link>
            </button>

        </div>
    );
};

export default UserPage;