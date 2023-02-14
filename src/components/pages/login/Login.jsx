import {AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import './Login.css'
const Login = () => {

    const [eyePassword,setEyePassword] = useState(true);
    const [typeInput,setTypeInput] = useState("password");


    const handlePassword = ()=>{
        setEyePassword(!eyePassword);
        if(typeInput==="password"){
            setTypeInput("text");
        }
        else{
            setTypeInput("password");
        }
    }

    return (
        <div className='loginBackground'>
            <div className='loginContainer'>
                <div className='loginLogoContainer'>

                </div>
                <div className='loginFormContainer'>
                    <h2>Bienvenido</h2>
                    <form className='formLogin' action="#">
                        <section>
                            <label htmlFor="">Usuario</label>
                            <input type="text" name="usuario" id="usuario" />
                            
                        </section>

                        <section>
                            <label htmlFor="">Password</label>
                            <input type={typeInput} name="password" id="password" />
                            {eyePassword?
                                <AiFillEye onClick={handlePassword}/>
                                :
                                <AiFillEyeInvisible onClick={handlePassword}/>}
                        </section>

                        <div className='loginButtons'>
                            <div>
                                <button className='buttonRegistrar'>Registrarse</button>
                                <button className='buttonLogin'>Login</button>  
            
                            </div>
                            <a href="">Recuperar contraseña</a>
                        </div>
                        

                        
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;