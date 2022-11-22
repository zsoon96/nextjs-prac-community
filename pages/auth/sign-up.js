

export default function SignUp() {
    return (
        <div className="container">
            <h1>회원가입</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput"
                           placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordInput"
                           placeholder="Password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameInput"
                           placeholder="Name" />
                </div>
            </form>

            <div>
                <button className='btn btn-primary'>회원가입</button>
            </div>
        </div>
    )
}