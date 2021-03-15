import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './style.scss';
import { RoutePath, setAccessToken, setMessage, ValidationMessages } from '../../helpers';
import Button from '../../shared/forms/button';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';
import Actions from '../../store/actions';

const ValidationSchema = Yup.object().shape({
    username: Yup.string().required(setMessage(ValidationMessages.required, 'Username')),
});

const Login = () => {
    const history = useHistory();
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const submit = async (params) => {
        setLoading(true);
        try {
            const res = await dispatch(Actions.authAction.Login(params));
            if (res && res.code) {
                setAccessToken(res.code);
                history.push(RoutePath.home);
            }
        } catch (e) {
            console.log(e);
            addToast(e.message, { appearance: 'error', autoDismiss: true });
            setLoading(false);
        }
    };

    return (
        <main className="container-fluid main-login">
            <div className="row vh-100">
                <div className="col-sm-10 col-md-8 col-lg-6 offset-lg-3 offset-md-2 offset-sm-1 align-self-center">
                    <div className="card card-block shadow border-0 mx-auto">
                        <div className="card-body p-5">
                            <div className="text-center mb-4">
                                <img src="/logo.png" alt="logo" style={{ width: '100px' }} />
                            </div>
                            <Formik
                                initialValues={{
                                    username: '',
                                }}
                                validationSchema={ValidationSchema}
                                onSubmit={(values) => {
                                    submit(values);
                                }}
                            >
                                {({ values, errors, touched, setFieldValue }) => (
                                    <Form className="">
                                        <div className="form-group">
                                            <Field
                                                name="username"
                                                type="text"
                                                placeholder="Please enter your username"
                                                autoComplete="off"
                                                className={
                                                    errors.username && touched.username
                                                        ? 'form-control is-invalid'
                                                        : 'form-control'
                                                }
                                                onChange={(event) => {
                                                    setFieldValue('username', event.target.value.trim());
                                                }}
                                            />
                                            <div className="mb-2 form-error text-danger small text-center">
                                                {errors && errors.username && touched && touched.username
                                                    ? errors.username
                                                    : ''}
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <Button
                                                title={'Login'}
                                                btnType={'submit'}
                                                loading={loading}
                                            />
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Login;
