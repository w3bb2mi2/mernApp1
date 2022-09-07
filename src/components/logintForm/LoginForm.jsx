import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

export const LoginForm = ({head, isUser}) => {
    const [form, setForm] =useState({
        email:"",
        password:""
    })
    const changeHandler = (e) =>{
        setForm({...form, [e.target.name]:e.target.value})
        console.log(form)
    }
    
    const registerHandler = async (e) =>{
        try {
           
            await axios.post("http://localhost:5000/registration", {...form},
            {headers:{
                "Content-Type":"application/json"
            }})
            .then(res=>console.log(res))
        } catch (error) {
            
        }
    }
    
    return (
        <div className="container">
            <div className="auth-page">
                <h3>{head}</h3>
                <form className="form form-login"  onSubmit={e=>e.preventDefault()}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                value={form.email}
                                onChange={changeHandler}
                                type="text"
                                name="email"
                                className="validate"
                            />
                            <label htmlFor="email">email</label>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    value = {form.password}
                                    onChange={changeHandler}
                                    type="password"
                                    name="password"
                                    className="validate"
                                />
                                <label htmlFor="email">password</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button 
                            onClick={registerHandler}
                            className="wawes-effect wawes-light btn btn blue"
                            >Отправить</button>
                        {
                            isUser? 
                            <Link to="/registration" className="btn-outline btn-reg">Нет аккаунта? Зарегистрируйтесь</Link>
                            :<Link to="/login" className="btn-outline btn-reg">Есть аккаунт? Войдите</Link>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}