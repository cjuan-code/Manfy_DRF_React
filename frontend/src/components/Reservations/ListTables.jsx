import React, { Suspense, useEffect, useState } from 'react'
import { useTablesByRestaurant, useFreeTablesByRestaurant } from "../../hooks/useTables";
import { useCreateReservation } from '../../hooks/useReservations';
import "./ListTables.css"
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'
import { useNavigate } from 'react-router-dom';
import * as JWTService from "../../services/JwtService"

const ListTables = (props) => {

    const navigate = useNavigate()

    const [ID, setID] = useState(null);

    const [resDate, setReservationDate] = useState(null);

    const [resHour, setReservationHour] = useState(null);

    const restaurant_id = localStorage.getItem('restaurant_id');

    const tables = useTablesByRestaurant(restaurant_id);

    const {freeTables, setTables, listTables} = useFreeTablesByRestaurant();

    const {createReservation, reservation, setReservation, res, setRes} = useCreateReservation();

    useEffect(() => {

        if (freeTables) {

            tables.tables.map(table => {
                document.getElementById(table.id).classList.add('non-free')
                document.getElementById(table.id).classList.add('square-border')
                document.getElementById(table.id + '_button').classList.add('disabled')
            })

            tables.tables.map(table => {
                freeTables.map(freeTable => {

                    if (table.id === freeTable.id) {
                        document.getElementById(table.id).classList.add('free')
                        document.getElementById(table.id).classList.add('square-border')
                        document.getElementById(table.id).classList.remove('non-free')
                        document.getElementById(table.id + '_button').classList.remove('disabled')
                    }

                })

            })
        }

    }, [freeTables, setTables])

    useEffect(() => {

        if (props.filters.filtering) {

            var Day = props.filters.date.getDate()
            var Month = props.filters.date.getMonth()+1
            var Year = props.filters.date.getFullYear()

            var reservationDate = Day + '/' + Month + '/' + Year;

            var restaurant_id = localStorage.getItem('restaurant_id')
            
            var reservationHour = props.filters.hour.label;

            var request_data = {"hour": reservationHour, "day": reservationDate, "restaurant_id": restaurant_id}

            setReservationDate(reservationDate)

            setReservationHour(reservationHour)

            listTables(request_data)

        } else if (tables.tables) {
            tables.tables.map(table => {
                document.getElementById(table.id).classList.remove('non-free')
                document.getElementById(table.id).classList.remove('free')
                document.getElementById(table.id).classList.remove('square-border')
                document.getElementById(table.id + '_button').classList.add('disabled')
            })
        }

        props.changeFilter(false);

    }, [props.filters])

    useEffect(() => {

        if (res) {
            if (res.status == 201) {
                toastr.options = {
                    positionClass : 'toast-bottom-full-width',
                    hideDuration: 300,
                    timeOut: 60000
                }
                toastr.clear()
                setTimeout(() => toastr.success('La reserva se ha completado correctamente.'), 300)

                navigate('/');
    
            } else {
                toastr.options = {
                    positionClass : 'toast-bottom-full-width',
                    hideDuration: 300,
                    timeOut: 60000
                }
                toastr.clear()
                setTimeout(() => toastr.error('Ha ocurrido un problema al reservar.'), 300)
            }
        }
    }, [res, setRes])

    const setClicked = (e) => {

        var splittedID = e.target.id.split('_')

        var ID = splittedID[0]

        setID(ID)

    }

    const reservationConfirm = () => {

        if (JWTService.getToken()) {
            var request_data = {'restaurant_id': restaurant_id, 'table_id': ID, 'hour': resHour, 'day': resDate}

            createReservation(request_data)
        } else {
            navigate('/login')
        }

    }

    if (tables.tables) {
        return (
            <>
                <div className='container-list row'>
                    <h2>Mesas</h2>
                    { tables.tables.map((table)=> (
                        <div key={table.id} className="card-tables d-flex flex-wrap p-1 mr-3 mb-3 justify-content-center">
                            <div className="card p-2 card-reser">
                                <img alt="" src="https://www.ikea.com/global/assets/navigation/images/dining-sets-19145.jpeg?imwidth=300"/>
                                <h5 className="reser_descrip pt-2">Mesa {table.id}</h5>
                                <p className='reser_descrip pb-2'>Plazas: {table.capacity} <i className="fas fa-user"></i></p>
                                <button id={table.id+"_button"} className='card_btn btn btn-dark disabled' data-bs-toggle="modal" data-bs-target="#ConfirmReservationModal" onClick={setClicked}>Reservar</button>
                                <div id={table.id} className='square'></div>
                            </div>
                        </div>
                    )) }
                </div>
                <div className="modal fade" id="ConfirmReservationModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Confirmar reserva</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <h5>Mesa: {ID}</h5>
                            <h5>Fecha de la reserva: {resDate}</h5>
                            <h5>Hora de la reserva: {resHour}</h5>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={reservationConfirm}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    } else {
        return (
            <Suspense fallback={<h2>Loading...</h2>}> </Suspense>
        )
    }
    
}

export default ListTables