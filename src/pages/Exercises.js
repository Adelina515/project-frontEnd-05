import React, { useEffect, useState } from 'react';
// import css from './Exercises.module.css';
import ExerciseHead from '../components/exercise/ExerciseHead';
import axios from 'axios';
import ExerciseCategoriesList from '../components/exercise/ExerciseCategoriesList';
import { useLocation, useNavigate } from 'react-router-dom';
import ExerciseList from '../components/exercise/ExerciseList';

function Exercises(props) {
  const [exCat, setExCat] = useState('Body parts');
  const [arr, setArr] = useState({totalPages:1, currentPage:1, result:[]});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const filter = queryParams.get('filter');

  axios.defaults.baseURL =
    'https://power-pulse-backend.onrender.com/exercises';
  axios.defaults.headers.common.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTUwMDhkNGY1NjdlODEyZWY0MzIxMCIsImlhdCI6MTcwNTMxMjM5NywiZXhwIjoxNzA1Mzk1MTk3fQ.-Nc_O5E8xqiFpVhDm3o_2S5ruSYTZ2WgF3O07JDfemc';
  useEffect(() => {
    if (!name || !filter) {
      setArr([]);
      setLoading(true);
      axios
        .get('?filter=' + exCat)
        .then(v => {
          setArr(v.data);
        })
        .finally(() => setLoading(false));
    }else{
        setArr([]);
        navigate("/exercises")
    }
  }, [setArr, exCat, filter, name, navigate]);


  if (!name || !filter) {
    return (
      <div>
        <ExerciseHead exCat={exCat} setExCat={setExCat} />
        {loading ? <div>Loading...</div> : <ExerciseCategoriesList arr={arr.result} />}
      </div>
    );
  } else {
    console.log(arr);
    return (
      <div>
        <ExerciseHead exCat={exCat} setExCat={setExCat} />
        <ExerciseList name={name} filter={filter}/>
      </div>
    );
  }
}

export default Exercises;
