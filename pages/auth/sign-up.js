import {useCallback, useEffect, useState} from "react";


export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    // 입력값의 유효성 검사에 대한 상태관리
    const [errors, setErrors] = useState({})

    // 입력 전 유효성 체크
    useEffect(()=> {
        const errors = {}
        if ( !email ) {
            errors.email = '이메일은 필수 입력 항목입니다.'
        }
        else if ( !password ) {
            errors.password = '비밀번호는 필수 입력 항목입니다.'
        }
        else if ( !name ) {
            errors.name = '이름은 필수 입력 항목입니다.'
        }
        setErrors(errors)
    }, [email, password, name])

    // email, password, name이 변경될 때만 동작
    const submit = useCallback(()=>{}, [email, password, name])

    return (
        <div className="container">
            <h1>회원가입</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput"
                           placeholder="name@example.com" value={email} onChange={event => setEmail(event.target.value)}/>
                    <p className='text-danger mt-2'>{ errors.email }</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordInput"
                           placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                    <p className='text-danger mt-2'>{ errors.password }</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameInput"
                           placeholder="Name" value={name} onChange={event => setName(event.target.value)} />
                    <p className='text-danger mt-2'>{ errors.name }</p>
                </div>
            </form>

            <div>
                <button className='btn btn-primary'>회원가입</button>
            </div>
        </div>
    )
}