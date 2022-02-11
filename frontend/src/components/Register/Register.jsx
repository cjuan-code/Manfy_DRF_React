import React from 'react'
import "../Login/login.css"

const RegisterComponent = () =>{
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
						<form control="" className="form-group">
							<div className="row">
								<input type="text" name="username" id="username" className="form__input" placeholder="Email"/>
							</div>
							<div className="row">
								<input type="password" name="password" id="password" className="form__input" placeholder="Password"/>
							</div>
							<div className="row">
								<input type="password" name="password" id="password" className="form__input" placeholder="Password"/>
							</div>
							<div className="row">
								<input type="password" name="password" id="password" className="form__input" placeholder="Password"/>
							</div>
							<div className="row">
								<input type="password" name="password" id="password" className="form__input" placeholder="Password"/>
							</div>
							<div className="row">
								<input type="submit" value="Submit" className="btn log-btn"/>
							</div>
						</form>
					</div>
					{/* <div className="row">
						<p className='text'>Ya tienes cuenta? <a className='btn log-btn' onClick={changeLogVal}>Inicia Sesion</a></p>
					</div> */}
				</div>
			</div>
		</div>
	</div>
    )
}

export default RegisterComponent