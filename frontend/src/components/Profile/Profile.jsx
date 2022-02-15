import React, { useEffect, useState,useContext } from 'react'
import "./css/profilecomp.css"
import UserContext from "../../context/UserContext"
import useUser from '../../../src/hooks/useUser'
import { useForm } from "react-hook-form";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'


const ProfileComponent = ()=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { update } = useUser()
    const { user, setUser } = useContext(UserContext);
    const [isSetting, setSetting] = useState(true)
    const [isIncident, setIncident] = useState(false)
    const [isReservation, setReservation] = useState(false)
    useEffect(()=>{
        changeActive()
    })
    const validate = ()=>{
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        if (email.length == 0){
            var message = "Your email is empty"
            notify(message)
        }
        if (password.length == 0){
            var message = "Your password is empty"
            notify(message)
        }
    }
    const handleChange = (event)=>{
        var value = event.target.value
        if(value.length == 0){
            var message = "Your email is empty"
            notify(message)
        }
    }
    const passwordChange = (event)=>{
        var value = event.target.value
        if(value.length == 0){
            var message = "Your password is empty"
            notify(message)
        }
    }
    const sumbit = ()=>{
    }
    const notify = (message) => {
        toastr.options = {
            positionClass : 'toast-bottom-full-width',
            hideDuration: 300,
            timeOut: 60000
        }
        toastr.clear()
        setTimeout(() => toastr.error(`${message}`), 300)
    };
    const changeSettingValue = (value,id)=>{
        var element = document.getElementsByClassName('active')[0]
        element.classList.remove('active')
        var element2 = document.getElementById(id)
        element2.classList.add('active')
        setSetting(value)
        setIncident(!value)
        setReservation(!value)
    }
    const changeIncidentValue = (value,id)=>{
        var element = document.getElementsByClassName('active')[0]
        element.classList.remove('active')
        var element2 = document.getElementById(id)
        element2.classList.add('active')
        setIncident(value)
        setSetting(!value)
        setReservation(!value)
    }
    const changeReservationValue = (value,id)=>{
        var element = document.getElementsByClassName('active')[0]
        element.classList.remove('active')
        var element2 = document.getElementById(id)
        element2.classList.add('active')
        setReservation(value)
        setSetting(!value)
        setIncident(!value)
    }
    const changeCuponsValue = (value,id)=>{
        var element = document.getElementsByClassName('active')[0]
        element.classList.remove('active')
        var element2 = document.getElementById(id)
        element2.classList.add('active')
        setReservation(value)
        setSetting(value)
        setIncident(value)
    }

    const changeActive = ()=>{
        var element = document.getElementsByClassName('active')[0]
        
    }
    return(
        <div className="container">
            <div className="profile-header">
                <div className="profile-img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png" width="200" alt="Profile Image"/>
                </div>

                <div className="profile-nav-info">
                    <h3 className="user-name">{user['full_name']}</h3>
                    <div className="address">
                        <p className="user-mail"><i className="fa fa-envelope mail"></i>{user['email']}</p>
                    </div>
                </div>

                <div className="profile-option">
                    <div className="notification">
                        <i className="fa fa-bell"></i>
                        <span className="alert-message">3</span>
                    </div>
                </div>
            </div>

            <div className="main-bd">

                <div className="left-side">

                    <div className="profile-side">
                        
                        <div className="user-bio">
                            <h3>Bio</h3>
                            <p className="bio">
                                Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
                            </p>
                        </div>

                        <div className="profile-btn">
                            <button className="chatbtn" id="chatBtn"><i className="fa fa-comment"></i> Chat</button>
                        </div>
                    </div>

                </div>

                <div className="right-side">

                    <div className="nav">
                        <ul>
                            <li className="user-post active" id="setting" onClick={(e)=>changeSettingValue(true,"setting")}>Ajustes</li>
                            <li className="user-review" id="incident" onClick={(e)=>changeIncidentValue(true,"incident")}>Incidencias</li>
                            <li className="user-setting" id="reservation" onClick={(e)=>changeReservationValue(true,"reservation")}>Reservas</li>
                            <li className="user-cupons" id="cupon" onClick={(e)=>changeCuponsValue(false,"cupon")}>Cupones</li>
                        </ul>
                    </div>
                    
                    {
                        isSetting
                        ?
                        <div className="container">
                            <form control="" className="form-group"  onSubmit={handleSubmit(update)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label htmlFor="first">Nombre</label>
                                        <input type="text" className="form-control" defaultValue={user['first_name']} placeholder="Nombre" id="name" {...register("first_name",{
                                            pattern:{
                                                value:/^[A-Z][a-z]+$/,
                                                message:"Your Name has a incorrect form"
                                            }
                                            })}/>
                                        </div>
                                    </div>


                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label htmlFor="last">Apellidos</label>
                                        <input type="text" className="form-control" defaultValue={user['last_name']} placeholder="Apellidos" id="surname" {...register("last_name",{
                                            pattern:{
                                                value:/^[A-Z][a-z]+$/,
                                                message:"Your Surname has a incorrect form"
                                            }
                                            })}/>
                                        </div>
                                    </div>

                                </div>


                                <div className="row last-row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Correo Electrónico</label>
                                            <input type="email" className="form-control" defaultValue={user['email']} id="email" contentEditable={true} placeholder="Correo Electrónico" {...register("email",{
                                            required:notify,
                                            pattern:{
                                                value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                message:"Your email has a incorrect form"
                                            }
                                            })} onChange={handleChange}/>
                                            {errors.email &&(
									            <p className="errorForm">{errors.email.message}</p>
								            )}
                                        </div>
                                    </div>


                                    <div className="col-md-6">

                                        <div className="form-group">
                                            <label htmlFor="phone">Contraseña</label>
                                            <input type="password" className="form-control" id="password" placeholder="Password" {...register("password",{
                                            required:notify,
                                            minLength:{
                                                value:4,
                                                message:"The password must have more than 4 characters"
                                            }
								             })} onChange={passwordChange}/>
                                            {errors.password &&(
                                                <p className="errorForm">{errors.password.message}</p>
                                            )} 
                                        </div>
                                    </div>

                                </div>

                                <button type="submit" className="btn btn-settings" onClick={validate}>Enviar</button>
                            </form>
                        </div>
                        :
                        isIncident
                        ?
                        <div>
                            <div class="event_container">
                            <div class="event_bg"></div>
                            <div class="event_info">
                                <div class="event_title">
                                    <h4>Recibido por</h4>
                                </div>
                                <div class="event_desc">
                                    <p>Aquí va el body de la incidencia</p>
                                </div>
                                <div class="event_footer">
                                    <div class="event_date">
                                        <p>Fecha de created_At</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="event_container">
                            <div class="event_bg"></div>
                            <div class="event_info">
                                <div class="event_title">
                                    <h4>Recibido por</h4>
                                </div>
                                <div class="event_desc">
                                    <p>Aquí va el body de la incidencia</p>
                                </div>
                                <div class="event_footer">
                                    <div class="event_date">
                                        <p>Fecha de created_At</p>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        </div>
                        :
                        isReservation
                        ?
                        <div>Hola Reservation</div>
                        :
                        <div className="d-flex justify-content-between flex-wrap align-items-center container">
                            <div className="d-flex card text-center">
                                <div className="image">
                                    <img src="https://i.imgur.com/DC94rZe.png" width="150"/>
                                </div>
                                <div className="image2">
                                    <img src="https://i.imgur.com/DC94rZe.png" width="150"/>
                                </div>
                                <h1>10% OFF</h1><span className="d-block">En todos los restaurantes</span><span className="d-block">Caduca en 15 días</span>
                                <div className="mt-4"><small>Con el codigo : manfy2022-rest</small></div>
                            </div>
                        </div>
                    }

                    <div className="profile-body">

                        <div className="profile-posts tab">
                            <h1>Your Post</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quia sunt itaque ut libero cupiditate ullam qui velit laborum placeat doloribus, non tempore nisi ratione error rem minima ducimus. Accusamus adipisci quasi at itaque repellat sed
                                magni eius magnam repellendus. Quidem inventore repudiandae sunt odit. Aliquid facilis fugiat earum ex officia eveniet, nisi, similique ad ullam repudiandae molestias aspernatur qui autem, nam? Cupiditate ut quasi iste, eos perspiciatis maiores
                                molestiae.</p>
                        </div>

                        <div className="profile-reviews tab">
                            <h1>User reviews</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam pariatur officia, aperiam quidem quasi, tenetur molestiae. Architecto mollitia laborum possimus iste esse. Perferendis tempora consectetur, quae qui nihil voluptas. Maiores debitis
                                repellendus excepturi quisquam temporibus quam nobis voluptatem, reiciendis distinctio deserunt vitae! Maxime provident, distinctio animi commodi nemo, eveniet fugit porro quos nesciunt quidem a, corporis nisi dolorum minus sit eaque error
                                sequi ullam. Quidem ut fugiat, praesentium velit aliquam!</p>
                        </div>

                        <div className="profile-settings tab">
                            <div className="account-setting">
                                <h1>Acount Setting</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit omnis eaque, expedita nostrum, facere libero provident laudantium. Quis, hic doloribus! Laboriosam nemo tempora praesentium. Culpa quo velit omnis, debitis maxime, sequi
                                animi dolores commodi odio placeat, magnam, cupiditate facilis impedit veniam? Soluta aliquam excepturi illum natus adipisci ipsum quo, voluptatem, nemo, commodi, molestiae doloribus magni et. Cum, saepe enim quam voluptatum vel debitis
                                nihil, recusandae, omnis officiis tenetur, ullam rerum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent