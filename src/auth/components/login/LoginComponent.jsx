import {
  MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBIcon, MDBInput, MDBCheckbox
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Login.css'
import image from './login.svg'

import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

export const LoginComponent = ({ onData, onRegister }) => {
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [errRegister, setErrRegister] = useState("");

  const onAuth = async (event) => {
    event.preventDefault();
    setLoading(true);
    await onData({ email, password, setLoading, setErrors });
  }


  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (

    <div className="p-3 my-5 d-flex flex-column w-50 main">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'} >

          <div className="text-center mb-3" >
            

            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
              <img src={image} width={'80%'} className='mt-2 mb-2'/>
            </div>

            
          </div>
          {errors && <div className="alert alert-danger" style={{ textAlign: "center" }}>{errors}</div>}

          <form onSubmit={event => onAuth(event)} style={{boxShadow:'none' }}>

            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'
              value={email} onChange={text => setEmail(text.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
              value={password} onChange={text => setPassword(text.target.value)} />

            <div className="d-flex justify-content-between mx-4 mb-4">
              
            </div>

            <MDBBtn className="mb-4 w-100" type='submit'> {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Sign in"}</MDBBtn>
          </form>

          <p className="text-center">Not a member? <a href='#' onClick={()=>handleJustifyClick('tab2')}>Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <Formik
            initialValues={{ name: '', surname: '', career: '', email: '', password: '', repeatPass: '' }}
            validationSchema={
              Yup.object().shape({
                name: Yup.string().required("Nombre requerido"),
                email: Yup.string().email("Correo inválido").required("Correo requerido"),
                password: Yup.string().min(6, "El mínimo es de 6 caracteres").required("Contraseña requerdia"),
                career: Yup.string().required("Carrera requerida"),
                repeatPass: Yup.string().oneOf([Yup.ref('password')], "Contraseñas desiguales").required("Contraseñas desiguales")
              })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(values);
                onRegister({ ...values, setErrRegister, setSubmitting })
              }, 400);
            }}
          >

            {({ isSubmitting, setFieldTouched, setFieldError, touched, errors }) =>
            (<Form style={{boxShadow:'none' }}>
              {errRegister && (<div className='alert alert-danger' style={{ textAlign: "center" }}>{errRegister}</div>)}

              <div className="field-container">
                <Field className='mt-4 form-control field' id='name' name='name' type='text' />
                <label htmlFor='name' className="animated-label">Nombre:</label>
                {touched.name && errors.name && <div className="alert alert-danger error">{errors.name}</div>}
              </div>

              <div className="field-container">
                <Field className='mt-4 form-control field' id='surname' name='surname' type='text' />
                <label htmlFor='surname' className="animated-label">Apellido:</label>
                {touched.surname && errors.surname && <div className="alert alert-danger error">{errors.surname}</div>}
              </div>

              <div className="field-container">
                <Field className='mt-4 form-control field' id='email' name='email' type='email' />
                <label htmlFor='email' className="animated-label">Email:</label>
                {touched.email && errors.email && <div className="alert alert-danger error">{errors.email}</div>}
              </div>

              <div className="field-container">
                <Field className='mt-4 form-control field' id='career' name='career' type='text' />
                <label htmlFor='career' className="animated-label">Carrera:</label>
                {touched.career && errors.career && <div className="alert alert-danger error">{errors.career}</div>}
              </div>

              <div className="field-container">
                <Field className='mt-4 form-control field' id='password' name='password' type='password' />
                <label htmlFor='password' className="animated-label">Password:</label>
                {touched.password && errors.password && <div className="alert alert-danger error">{errors.password}</div>}
              </div>

              <div className="field-container">
                <Field className='mt-4 form-control field' id='repeatPass' name='repeatPass' type='password' />
                <label htmlFor='repeatPass' className="animated-label">Repetir password:</label>
                {touched.repeatPass && errors.repeatPass && <div className="alert alert-danger error">{errors.repeatPass}</div>}
              </div>

              <MDBBtn className="mt-4 w-100" type='submit' disabled={isSubmitting}>{isSubmitting ? <FontAwesomeIcon icon={faSpinner} spin /> : "Sign up"}</MDBBtn>

            </Form>)}

          </Formik>

        </MDBTabsPane>

      </MDBTabsContent>

    </div>
  );
}

LoginComponent.propTypes = {
  title: PropTypes.string.isRequired
}

LoginComponent.defaultProps = {
  title: "Hola mundo"
}