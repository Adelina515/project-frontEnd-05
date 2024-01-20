import { parseISO } from 'date-fns';
import { useDispatch } from 'react-redux'; ///useSelector
import { Formik, Field, Form } from 'formik'; /// ErrorMessage
import * as Yup from 'yup';
import { updateProfileParamsTh } from '../../redux/UserPageCntrls/UserPageOperations';
import toast from 'react-hot-toast';
import { RadioButton } from 'components/radioButton/RadioButton';
import css from './UserForm.module.css';
import { Calendar } from 'components/calendar/Calendar';

export const UserForm = ({
  name,
  height,
  currentWeight,
  desiredWeight,
  birthday,
  blood,
  sex,
  levelActivity,
  email,
  userToken
}) => {
  const dispatch = useDispatch();

  const bloodOptions = [
    { id: '1', value: 1, label: '1' },
    { id: '2', value: 2, label: '2' },
    { id: '3', value: 3, label: '3' },
    { id: '4', value: 4, label: '4' },
  ];

  const sexOptions = [
    { id: 'Male', value: 'male', label: 'Male' },
    { id: 'Female', value: 'female', label: 'Female' },
  ];

  const levelOptions = [
    {
      id: 'level-1',
      value: 1,
      label: 'Sedentary lifestyle (little or no physical activity)',
    },
    {
      id: 'level-2',
      value: 2,
      label: 'Light activity (light exercises/sports 1-3 days per week)',
    },
    {
      id: 'level-3',
      value: 3,
      label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
    },
    {
      id: 'level-4',
      value: 4,
      label: 'Very active (intense exercises/sports 6-7 days per week)',
    },
    {
      id: 'level-5',
      value: 5,
      label:
        'Extremely active (very strenuous exercises/sports and physical work)',
    },
  ];

  const handleSubmit = async (values) => {
    try {
      const newParams = {
        ...values,
      };

      // Dispatch the updateProfileParamsTh action
      await dispatch(updateProfileParamsTh({ newParams, userToken }));

      // Show success notification
      toast.success('Profile updated successfully!', {
        duration: 3000,
      });
    } catch (error) {
      // Show error notification
      toast.error('Error updating profile. Please try again.', {
        duration: 3000,
      });
      console.error('Error updating profile:', error);
    }
  };

  if (!name) {
    return <div>Loading...</div>;
  }
  const formattedDate = parseISO(birthday);

  const initialValues = {
    name: name,
    height: height,
    currentWeight: currentWeight,
    desiredWeight: desiredWeight,
    birthday: formattedDate,
    blood: blood || 1,
    sex: sex || 'male',
    levelActivity: levelActivity || '1',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    height: Yup.number()
      .positive('Height must be positive')
      .required('Height is required'),
    currentWeight: Yup.number()
      .positive('Weight must be positive')
      .required('Current weight is required'),
    desiredWeight: Yup.number()
      .positive('Weight must be positive')
      .required('Desired weight is required'),
    birthday: Yup.date().required('Birthday is required'),
    blood: Yup.number(),
  });

  return (
  
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className={css.forForm }>
          <div className={css.formContainer}>
            <div className={css.wrInput}>
          
              <Field
                name="name"
                type="text"
                className={css.input}
                defaultValue={name}
               
              />  
              <label className={css.label} htmlFor="name">Name</label>
            </div>
            <div className={css.wrInput}>
           
              <input
                type="text"
                name="email"
                defaultValue={email}
                className={css.input}
                readOnly
                disabled
              /> 
              <label htmlFor="email" className={css.label} >Email</label>
            </div>
          </div>
<div className={css.wrapperFields}>
          <div className={css.wrapperInputField}>
            <div className={css.wrapper}>
              <div className={css.wrappInput}  id="height">
                
                <Field
                  type="number"
                  name="height"
                  id="height"
                  placeholder=""
                  className={css.inputField}
                />
                <label htmlFor="height" className={css.label} >Height</label>
              </div>
            </div>
            <div className={css.wrappInput} id="currentWeight">
              <Field
                type="number"
                name="currentWeight"
                id="currentWeight"
                placeholder=""
                className={css.inputField}
              />
              <label htmlFor="currentWeight"className={css.label} >Current Weight</label>
            </div>
          </div>

          <div className={css.wrapperInputField } id="desiredWeight">
            <div className={css.wrappInput}>
              <Field
                type="number"
                name="desiredWeight"
                id="desiredWeight"
                placeholder=""
                className={css.inputField}
              />
              <label htmlFor="desiredWeight" className={css.label} >Desired Weight</label>
            </div>
            {/* <div className={css.wrappInput}>
              <input
                type="date"
                name="birthday"
                id="birthday"
                value={formik.values.birthday}
                onChange={formik.handleChange}
                className={css.inputField}
              />
              <label htmlFor="birthday" className={css.label} >Date of birthday</label>
            </div> */}
            <div  className="calendar" id="calendar">
            <Calendar  selectedDate={formik.values.birthday}
           
              setSelectedDate={date => {
                const formattedDate = parseISO(date.toISOString());
                formik.setFieldValue('birthday', formattedDate)}}/>
          </div></div>
          </div>

          <div className={css.wrapperRadio}>
            <div  className={css.forRadio}>
              <div className={css.forRadioBtn}>
              <label htmlFor="blood"className={css.labelForRadio} >Blood</label>

                {bloodOptions.map(option => (
                  <RadioButton
                    key={option.id}
                    id={option.id}
                    name="blood"
                    value={option.value}
                    checked={formik.values.blood === option.value}
                    label={option.label}
                    onChange={() => formik.setFieldValue('blood', option.value)}
                  />
                ))}

              </div>

              <div className={css.forRadioBtn}>
                {sexOptions.map(option => (
                  <RadioButton
                    key={option.id}
                    id={option.id}
                    name="sex"
                    value={option.value}
                    checked={formik.values.sex === option.value}
                    label={option.label}
                    onChange={() => formik.setFieldValue('sex', option.value)}
                  />
                ))}
              <label htmlFor="sex"className={css.labelForRadio} >Sex</label>

              </div>
            </div>

            <div className={css.forLevelAct}>
              {levelOptions.map(option => (
                <RadioButton
                  className={css.wrapperLevel}
                  key={option.id}
                  id={option.id}
                  name="levelActivity"
                  value={option.value}
                  checked={formik.values.levelActivity === option.value}
                  label={option.label}
                  onChange={() =>
                    formik.setFieldValue('levelActivity', option.value)
                  }
                />
              ))}
            </div>
          </div>

          <button type="submit" className={css.button}>
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};
