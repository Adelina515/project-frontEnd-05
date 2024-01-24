import React, { useEffect, useState } from 'react';
import ExerciseHead from '../components/exercise/ExerciseHead';

import instance from 'instance/instance';
import ExerciseCategoriesList from '../components/exercise/ExerciseCategoriesList';
import ExerciseList from '../components/exercise/ExerciseList/ExerciseList';
import ExerciseModal from 'components/exercise/Modal/ExerciseModal';
import { useLocation } from 'react-router-dom';
import Pagination from 'components/exercise/ExerciseList/Pagination/Pagination';
import formatDate from 'function/formatData';
import { Loader } from 'components/loader/Loader';


function Exercises(props) {

  const isTablet = ()=>{
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    return (viewportWidth >= 768 && viewportWidth <= 1200)
  }

  const [exCat, setExCat] = useState('Body parts');
  const [arr, setArr] = useState({ totalPages: 1, currentPage: 1, result: [] });
  const [loading, setLoading] = useState(false);
  const [selectedEx, setSelectedEx] = useState(undefined);
  const location = useLocation();
  const date = location.state ? location.state : formatDate(new Date());

  const [specific, setSpecific] = useState({
    name: undefined,
    filter: undefined,
  });
  const [page, setPage]=useState(1);
  useEffect(()=>{
    setPage(1);
  }, [exCat])
  const reload = () => {
    setArr([]);
    setLoading(true);
    instance
      .get(`exercises?page=${page}&limit=${isTablet()?9:10}&filter=${exCat}`)
      .then(v => {
        setArr(v.data);
      })
      .finally(() => setLoading(false));
    setSpecific({});
    setSelectedEx(undefined);
  }
  useEffect(reload, [exCat, page]);

  if (!specific.name || !specific.filter) {
    return (
      <div>
        <ExerciseHead exCat={exCat} setExCat={setExCat} />
        {loading ? (
          <Loader/>
        ) : (
          <ExerciseCategoriesList data={arr} setSpec={setSpecific} />
        )}
        <Pagination page={page} setPage={setPage} pagesTotal={arr.totalPages}/>
      </div>
    );
  } else {
    
    return (
      <div>
        <ExerciseHead exCat={exCat} setExCat={setExCat} name={specific.name} back={reload}/>
      

        <ExerciseList
          name={specific.name}
          filter={specific.filter}
          setSelected={setSelectedEx}
        />
        {selectedEx ? <ExerciseModal ex={selectedEx} setEx={setSelectedEx}  selectedDate={date}/> : <></>}
      </div>
    );
  }
}

export default Exercises;
