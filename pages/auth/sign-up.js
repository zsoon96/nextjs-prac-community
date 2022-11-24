import {useCallback, useMemo, useState} from "react";
import axios from 'axios';


export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [touchedEmail, setTouchedEmail] = useState(false)
    const [touchedPassword, setTouchedPassword] = useState(false)
    const [touchedName, setTouchedName] = useState(false)
    // 입력값의 유효성 검사에 대한 상태관리
    // const [errors, setErrors] = useState({})

    // 입력 전 유효성 체크
    const errors = useMemo(() => {
        const errors = {}
        if (!email) {
            errors.email = '이메일은 필수 입력 항목입니다.'
        } else if (!password) {
            errors.password = '비밀번호는 필수 입력 항목입니다.'
        } else if (!name) {
            errors.name = '이름은 필수 입력 항목입니다.'
        }
        // setErrors(errors)
        return errors
    }, [email, password, name])

    // email, password, name이 변경될 때만 동작
    const submit = useCallback((event) => {
        event.preventDefault();

        // error가 한개라도 있으면 제출 x
        if (Object.keys(errors).length > 0) {
            return;
        }

        axios.post('http://localhost:3333/auth/sign-up', {
            email,
            password,
            name
        })
            .then(() => {
                alert('회원가입 완료')
            })
            .catch((error) => {
                console.log(error)
                alert(error.response?.data?.message ?? error.message ?? '서버와의 통신에 실패하였습니다.')
            })
    }, [email, password, name, errors])


    return (
        <div className="container">
            <h1>회원가입</h1>

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput"
                           placeholder="name@example.com" value={email} onChange={event => setEmail(event.target.value)}
                           onFocus={() => {
                               setTouchedEmail(true)
                           }}
                    />
                    <p className='text-danger mt-2'>{errors.email && touchedEmail && errors.email}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordInput"
                           placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}
                           onFocus={() => {
                               setTouchedPassword(true)
                           }}
                    />
                    <p className='text-danger mt-2'>{errors.password && touchedPassword && errors.password}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameInput"
                           placeholder="Name" value={name} onChange={event => setName(event.target.value)}
                           onFocus={() => {
                               setTouchedName(true)
                           }}
                    />
                    <p className='text-danger mt-2'>{errors.name && touchedName && errors.name}</p>
                </div>
            </form>

            <div>
                <button className='btn btn-primary'>회원가입</button>
            </div>
        </div>
    )
}