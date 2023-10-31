import React, { useState } from 'react'
import "./form.css"
const Form1 = () => {
    const [Name, setname] = useState("")
    const [Email, setemail] = useState("")
    const [Mobile, setmobile] = useState("")
    const [Password, setpassword] = useState("")
    const [CPassword, setcPassword] = useState("")

    const name = (e) => {
        setname(e.target.value)
    }
    const email = (e) => {
        setemail(e.target.value)

    }
    const mobile = (e) => {
        setmobile(e.target.value)


    }
    const password = (e) => {
        setpassword(e.target.value)

    }
    const cPassword = (e) => {
        setcPassword(e.target.value)

    }
    return (
        <div>
            <center>
                <div style={{ width: "40%" }} className='form-control p-5 bg-secondary text-light mt-5'>
                    <h1 className='' >Form</h1>
                    <form>
                        <div className='text-start'>
                            <div >
                                <label for="name">Name</label>
                                <input type='text' onChange={name} className='form-control' id="name" />
                                <br />
                                <label for="email">Email</label>
                                <input type='text' onChange={email} className='form-control' id="email" />
                                <br />
                                <label for="Mobile">Mobile</label>
                                <input type='text' onChange={mobile} className='form-control' id="Mobile" />
                                <br />
                                <label for="password">password</label>
                                <input type='text' onChange={password} className='form-control' id="password" />
                                <br />
                                <label for="cPassword">cPassword</label>
                                <input type='text' onChange={cPassword} className='form-control' id="cPassword" />
                                <br />
                                <center>
                                    <button className='btn btn-dark w-50 form-control  '>Submit</button>
                                </center>
                            </div>
                        </div>
                    </form>

                </div>
            </center>
            <div className='p-5'>
                <table border={10} width="100%">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Password</th>
                        <th>Cpassword</th>

                    </tr>
                    <tr>
                        <td>{Name}</td>
                        <td>{Email}</td>
                        <td>{Mobile}</td>
                        <td>{Password}</td>
                        <td>{CPassword}</td>

                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Form1
