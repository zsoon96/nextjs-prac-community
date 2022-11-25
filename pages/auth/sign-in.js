import {Formik} from 'formik';
import axios from "axios";

// 이메일 주소 정규식 검증 코드
const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export default function SignIn() {
    return (
        <div className='container'>
            <h1>로그인</h1>
            {/* 폼을 관리하는 라이브러리 > 반복적인 작업을 최소화 */}
            <Formik
                // 초기값 설정
                initialValues={{
                    email: '',
                    password: ''
                }}
                // 유효성 체크인
                validate={values => {
                    const errors = {}
                    if ( !values.email ) {
                        errors.email = '이메일은 필수 입력 항목입니다.'
                    }
                    else if ( !emailRegExp.test(values.email) ) {
                        errors.email = '이메일 형식이 올바르지 않습니다.'
                    }
                    else if ( !values.password ) {
                        errors.password = '비밀번호는 필수 입력 항목입니다.'
                    }
                    return errors;
                }}
                // 데이터 전송
                // setSubmitting: 폼 전송 시 진행상태 관리 (로딩 표시로 활용)
                onSubmit={ (values, {setSubmitting} ) => {
                    setSubmitting(true)
                    axios.post('http://localhost:3333/auth/sign-in', values)
                        .then(response => console.log(response.data))
                        .catch(error => {
                            console.warn(error)
                            alert(error.response?.data?.message ?? error.message ?? '서버와의 통신에 실패하였습니다.')
                        })
                        .finally(() => {
                            setSubmitting(false)
                        })
                }}
            >
                {
                    ({
                         values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit
                     }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="emailInput"
                                       placeholder="name@example.com"
                                       name='email'
                                       value={ values.email }
                                       onChange={ handleChange }
                                       onBlur={ handleBlur }
                                />
                                {/* errors.password가 있고, touched.password가 있으면, errors.password를 출력*/}
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
                                <button type='submit' className='btn btn-primary'>{isSubmitting ? '로그인 중' : '로그인'}</button>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}