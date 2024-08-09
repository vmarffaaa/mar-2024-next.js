import React from 'react';
import Link from "next/link";
import style from "@/components/header/HeaderComponent.module.css"

const HeaderComponent = () => {
    return (
        <div className={style.header}>
            <ul className={style.flex}>
                <li><Link className={style.link} href={'/'}>Home</Link></li>
                <li><Link className={style.link} href={'/users'}>Users</Link></li>
                <li><Link className={style.link} href={'/posts'}>Posts</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;