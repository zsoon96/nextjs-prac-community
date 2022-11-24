import {Formik} from 'formik';

export default function SignIn() {
    return (
        <div className='container'>
            <h1>로그인</h1>
            <Formik
                // 초기값 설정
                initialValues={{
                    email: '',
                    password: ''
                }}
                // 유효성 체크인
                validate={values => {

                }}
                // 데이터 전송
                onSubmit={values => {

                }}
            >
                {
                    ({
                         values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit
                     }) => (
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="emailInput"
                                       placeholder="name@example.com"
                                       name='email'
                                       value={ values.email }
                                       onChange={ handleChange }
                                       onBlur={ handleBlur }
                                />
                                <p className='text-danger mt-2'>{ errors.email && touched.email && errors.email }</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput"
                                       placeholder="Password"
                                       name='password'
                                       value={ values.password }
                                       onChange={ handleChange }
                                       onBlur={ handleBlur }
                                />
                                <p className='text-danger mt-2'>{ errors.password && touched.password && errors.password }</p>
                            </div>
                            <div>
                                <button type='submit' className='btn btn-primary'>회원가입</button>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}