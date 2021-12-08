/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';
import Styles from '../../styles/Ningas.module.css';
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props : {ninjas : data}
    }
}
const index = ({ninjas}) => {
    return (
        <div>
           <h1>This is all ningas</h1> 
           {
               ninjas.map(ninja => <div key={ninja.id}>
                   <Link href={`/ningas/${ninja.id}`} >
                       <a className={Styles.single}>
                       <h3>
                       {ninja.name}
                       </h3>
                       </a>
                   </Link>
               </div>)
           }
        </div>
    );
};

export default index;