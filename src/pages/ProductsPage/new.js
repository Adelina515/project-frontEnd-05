// import css from './products.module.css';
// import TitlePage from 'components/TitlePage/TitlePage';
// import { ProductsFilters } from 'components/productsFilters/ProductsFilters';
// import { ProductsList } from 'components/productsList/ProductsList';
// import { useState } from 'react';
// import { Container } from '../../components/Container/Container';
// import { AddProductForm } from 'components/addProductForm/AddProductForm';
// import { BasicModalWindow } from '../../modal/basicModalWindow/BasicModalWindow';
// import { useSelector } from 'react-redux';
// import { AddProductSuccess } from 'components/addProductSuccess/AddProductSuccess';
// import { selectSuccess } from '../../redux/products/productsSelectors';
// import { useLocation } from 'react-router-dom';
// import formatDate from 'function/formatData';
// const ProductsPage = () => {
//   const [open, setOpen] = useState(false);
//   const [modal, setModal] = useState(null);
//   const [calories, setCalories] = useState(0);
//   const location = useLocation();
//   const dateDiary = location.state ? location.state : formatDate(new Date());
// ;
//   const isSuccess = useSelector(selectSuccess);

//   // const convertDate = date => {
//   //   let rawDate;
//   //   date ? (rawDate = date) : (rawDate = new Date());
//   //   const newDate = formatDate(rawDate);
//   //   return newDate;
//   // };

//   const handleClose = e => {
//     setOpen(false);
//   };
//   const handleOpen = data => {
//     setOpen(true);
//     setModal(data);
//   };
//   const handleCalories = count => {
//     // console.log(count);
//     setCalories(count);
//   };
//   const date = dateDiary;
//   // console.log('finalDate', date);
//   return (
//     <div className={css.productsPage}>
//       <Container>
//         <div className={css.wrapper}>
//           <TitlePage children="Products" className={css.wrapper} />
//           <ProductsFilters />
//           <ProductsList openModal={handleOpen} />
//         </div>
//       </Container>
//       <BasicModalWindow isOpen={open} onClose={handleClose}>
//         {!isSuccess ? (
//           <AddProductForm data={modal} count={handleCalories} date={date} />
//         ) : (
//           <AddProductSuccess calories={calories} date={date} />
//         )}
//       </BasicModalWindow>
//     </div>
//   );
// };
// export default ProductsPage;

// > Дарина Дерманчук:
// import css from './Diary.module.css';
// import { useLocation } from 'react-router-dom';

// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';

// import formatDate from '../function/formatData';

// import TitlePage from '../components/TitlePage/TitlePage';
// import DaySwitch from '../components/daySwitch/DaySwitch';
// import DayDashboard from '../components/dayDashboard/DayDashboard';
// import DayProducts from '../components/dayProducts/DayProducts';
// import DayExercises from '../components/dayExercises/DayExercises';
// import { Container } from '../components/Container/Container';

// import { fetchAllDiary } from '../redux/diary/diaryOperations';
// // import { selectDiaryExercises, selectDiaryProducts } from '../redux/diary/diarySelectors';


// export default function Diary() {
//   const dispatch = useDispatch();

//   // const productsInDiary = useSelector(selectDiaryProducts);
//   // const excersisesInDiary = useSelector(selectDiaryExercises);

//   const [dateExport, setDateExport] = useState(null);
//   const location = useLocation();
//   console.log('location state in diary>>', location.state)

//   useEffect(() => {
//     const formatted = formatDate(new Date())
//     setDateExport(location.state ? location.state : formatted);
//     dispatch(fetchAllDiary(dateExport ? dateExport : formatted));
// }, [dateExport, dispatch, location.state]);

  
//   const handleDate = date => {
//   const formatedDate = formatDate(date);
//     return formatedDate;
//   };

//   console.log("dateExport >>", dateExport)
  
//   return (
//     <div className={css.diary}>
//       <Container>
//         <div className={css.calendarCont}>
//           <TitlePage children="Diary" />

//           <div className={css.calendar}>
//             <DaySwitch handleDate={handleDate} selectedDate={dateExport} />
//           </div>
//         </div>
//         <div className={css.sectionCont}>
//           <DayDashboard />
//           <div>
//             <DayProducts selectedDate={dateExport} />
//             <DayExercises selectedDate={dateExport}/>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }
