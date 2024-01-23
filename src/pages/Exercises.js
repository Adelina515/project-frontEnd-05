import React, { useEffect, useState } from 'react';
import ExerciseHead from '../components/exercise/ExerciseHead';

import instance from 'instance/instance';
import ExerciseCategoriesList from '../components/exercise/ExerciseCategoriesList';
import ExerciseList from '../components/exercise/ExerciseList/ExerciseList';
import ExerciseModal from 'components/exercise/Modal/ExerciseModal';

function Exercises(props) {
  const [exCat, setExCat] = useState('Body parts');
  const [arr, setArr] = useState({ totalPages: 1, currentPage: 1, result: [] });
  const [loading, setLoading] = useState(false);
  const [selectedEx, setSelectedEx] = useState(undefined);

  const [specific, setSpecific] = useState({
    name: undefined,
    filter: undefined,
  });

  useEffect(() => {
    console.log('skskks');
    setArr([]);
    setLoading(true);
    instance
      .get('exercises?filter=' + exCat)
      .then(v => {
        setArr(v.data);
      })
      .finally(() => setLoading(false));
    setSpecific({});
    setSelectedEx(undefined);
  }, [setArr, exCat]);

  if (!specific.name || !specific.filter) {
    return (
      <div>
        <ExerciseHead exCat={exCat} setExCat={setExCat} />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ExerciseCategoriesList arr={arr.result} setSpec={setSpecific} />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <ExerciseHead exCat={exCat} setExCat={setExCat} />
        <ExerciseList
          name={specific.name}
          filter={specific.filter}
          setSelected={setSelectedEx}
        />
        {selectedEx ? <ExerciseModal ex={selectedEx} setEx={setSelectedEx} /> : <></>}
      </div>
    );
  }
}

export default Exercises;
