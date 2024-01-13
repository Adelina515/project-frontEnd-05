// import * as Yup from 'yup';

// export  const signUpSchema = Yup.object()({
//     name: Yup.string()
//       .required('Required')
//       .min(2, 'Name must be at least 2 characters')
//       .max(10, 'Name must be no more than 16 characters'),
  
//     email: Yup.string().matches(/^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/).email('Invalid email address').required('Required'),
  
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Required'),
//   });
//   export  const signInSchema = Yup.object()({
//     email: Yup.string().matches(/^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/).email('Invalid email address').required('Required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Required'),
//   });