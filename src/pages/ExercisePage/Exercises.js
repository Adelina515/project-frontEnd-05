import React, { useEffect, useState } from 'react';
import css from './Exercises.module.css';
import ExerciseHead from './ExerciseHead';
import axios from 'axios';

function Exercises(props) {
    const [exCat, setExCat ] = useState("Body parts");
    const [arr, setArr] = useState([]);
    axios.defaults.baseURL="https://power-pulse-backend.onrender.com/exercises/"

    useEffect(()=>{
        
        axios.get(exCat.replace(" ", "").toLowerCase()).then(v=>setArr(v.data));
        
    }, [setArr, exCat])
    
    console.log(arr);
    return (
        <div>
            <ExerciseHead exCat={exCat} setExCat={setExCat}/>
            
        </div>
    );
}

export default Exercises;