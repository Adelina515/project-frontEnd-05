import { parseISO } from 'date-fns';
import { useDispatch } from 'react-redux'; ///useSelector
import { Formik, Field, Form } from 'formik'; /// ErrorMessage
import * as Yup from 'yup';
import { updateProfileParamsTh } from '../../redux/UserPageCntrls/UserPageOperations';

import { RadioButton } from 'components/radioButton/RadioButton';
import css from './UserForm.module.css';

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

  const handleSubmit = values => {
    const sendData = {
      ...values,
    };
   // console.log(sendData);
    dispatch(updateProfileParamsTh(sendData)); ////////////////////////////////
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
        <Form>
          <div className={css.formContainer}>
            <div>
              <p className={css.sectionTitle}>Basic info</p>
              <input
                name="name"
                type="text"
                className={css.input}
                defaultValue={name}
                readOnly
                disabled
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                defaultValue={email}
                className={css.input}
                readOnly
                disabled
              />
            </div>
          </div>

          <div className={css.wrapperInputField}>
            <div className={css.wrapper}>
              <div className={css.wrappInput}>
                <Field
                  type="number"
                  name="height"
                  id="height"
                  placeholder=""
                  className={css.inputField}
                />
                <label htmlFor="height">Height</label>
              </div>
            </div>
            <div className={css.wrappInput}>
              <Field
                type="number"
                name="currentWeight"
                id="currentWeight"
                placeholder=""
                className={css.inputField}
              />
              <label htmlFor="currentWeight">Current Weight</label>
            </div>
          </div>

          <div className={css.wrapperInputField}>
            <div className={css.wrappInput}>
              <Field
                type="number"
                name="desiredWeight"
                id="desiredWeight"
                placeholder=""
                className={css.inputField}
              />
              <label htmlFor="desiredWeight">Desired Weight</label>
            </div>
            <div className={css.wrappInput}>
              <input
                type="date"
                name="birthday"
                id="birthday"
                value={formik.values.birthday}
                onChange={formik.handleChange}
                className={css.inputField}
              />
              <label htmlFor="birthday">Date of birthday</label>
            </div>
          </div>

          <div className={css.wrapperRadio}>
            <div style={{ display: 'flex', marginRight: '20px' }}>
              <div style={{ display: 'flex', marginRight: '20px' }}>
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

              <div style={{ display: 'flex' }}>
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
              </div>
            </div>

            <div>
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
