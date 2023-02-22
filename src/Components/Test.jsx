import { useContext } from 'react';
import AppContext from '../index.js';


export default function Test( ) {
    const { items } = useContext(AppContext);
    // param = 32
    console.log(items)
    return(
        <>
            <b>{}тест</b>
            <img src="/img/icons/del-close.svg" alt="" />
        </>
    
)}

