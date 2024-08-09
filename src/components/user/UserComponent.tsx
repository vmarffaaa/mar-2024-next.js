import React, {FC} from 'react';
import Link from "next/link";
import style from "@/components/user/UserComponent.module.css"

interface IProps {
    user: any
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div className={style.box}>
            <Link className={style.link} href={{pathname: '/users/' + user.id, query: {data: JSON.stringify(user)}}}>
                {user.id}. {user.username}
            </Link>
        </div>
    );
};

export default UserComponent;