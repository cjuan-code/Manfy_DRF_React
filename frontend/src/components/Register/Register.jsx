import React from 'react'
import { useForm } from "react-hook-form";
import useUser from '../../../src/hooks/useUser'
import "../Login/login.css"
import { routes } from "../../secrets"

const RegisterComponent = () =>{

	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const { registerUser, user, isLogged } = useUser();

	if(user != undefined){
		const size = Object.keys(user).length
		if(size > 0){
			window.location.href = routes.HOME_URL
		}
	}

    return(
		<div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fas fa-utensils uten"></span></h2></span>
				<h4 className="company_title">Manfy</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2>Register</h2>
					</div>
					<div className="row">
						<form control="" className="form-group" onSubmit={handleSubmit(registerUser)}>
							<div className="row">
								<input type="text" {...register("email",{
									required:"You must write your email",
									pattern:{
										value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
										message:"Your email has a incorrect form"
									}
								})} id="email" className="form__input" placeholder="Email"/>
								{errors.email &&(
									<p className="errorForm">{errors.email.message}</p>
								)}
							</div>
							<div className="row">
								<input type="text" {...register("first_name",{
									required:"You must write your name",
								})} id="name" className="form__input" placeholder="Name"/>
								{errors.first_name &&(
									<p className="errorForm">{errors.first_name.message}</p>
								)}
							</div>
							<div className="row">
								<input type="text" {...register("last_name",{
									required:"You must write your surnames",
								})} id="surnames" className="form__input" placeholder="Surnames"/>
								{errors.last_name &&(
									<p className="errorForm">{errors.last_name.message}</p>
								)}
							</div>
							<div className="row">
								<input type="password" {...register("password",{
									required:"You must write your password",
									minLength:{
										value:4,
										message:"The password must have more than 4 characters"
									}
								})} id="password" className="form__input" placeholder="Password"/>
								{errors.password &&(
									<p className="errorForm">{errors.password.message}</p>
								)}
								
							</div>
							<div className="row">
								<input type="submit" value="Submit" className="btn log-btn"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default RegisterComponent