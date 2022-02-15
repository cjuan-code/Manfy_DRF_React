import React, { createRef, Suspense, useEffect, useState } from "react";
import { useRestaurantByID } from "../../hooks/useRestaurant";
import "./reservations.css"

import ListTables from "../../components/Reservations/ListTables"
import { DatePicker, Picklist, Option } from 'react-rainbow-components';

const Reservations = () => {

    const filter_button = createRef();

    // filter_button.current.disabled = true;

    const containerStyles = {
        width: '90%',
    };

    const [filtering, setFiltering] = useState(false);

    const [turn, setTurn] = useState('-- Seleccione turno --');

    const [hours, setHours] = useState([]);

    const [selectedHour, setSelectedHour] = useState();

    const [reservationDate, setDate] = useState(new Date());

    const restaurant_id = localStorage.getItem('restaurant_id');

    const restaurant = useRestaurantByID(restaurant_id);

    useEffect(() => {

        if (turn.label === '-- Seleccione turno --') {
            setHours([]);
            setSelectedHour({label: '-- Seleccione hora --', name: 'option 0', icon: null, value: undefined});
        } else if (turn.label === 'Comida') {
            setHours(['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00']);
            setSelectedHour({label: '-- Seleccione hora --', name: 'option 0', icon: null, value: undefined});
        } else if (turn.label === 'Cena') {
            setHours(['20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00']);
            setSelectedHour({label: '-- Seleccione hora --', name: 'option 0', icon: null, value: undefined});
        }

    }, [turn, setTurn])

    useEffect(() => {

        var now = new Date();

        var nowDay = now.getDate()
        var nowMonth = now.getMonth()+1
        var nowYear = now.getFullYear()

        var newNow = new Date(nowYear, nowMonth, nowDay)

        var resDay = reservationDate.getDate()
        var resMonth = reservationDate.getMonth()+1
        var resYear = reservationDate.getFullYear()

        var newRes = new Date(resYear, resMonth, resDay)

        if (filter_button.current) {

            if (!selectedHour || selectedHour.label === '-- Seleccione hora --') {
                filter_button.current.classList.add('disabled');
            } else if (newNow.valueOf() > newRes.valueOf()) {
                filter_button.current.classList.add('disabled');
            } else {
                filter_button.current.classList.remove('disabled');
            }

        }

    }, [reservationDate, setDate, selectedHour, setSelectedHour, turn, setTurn])

    const filter = () => {
        setFiltering(true)
    }

    const setFilterFalse = (value) => {
        setFiltering(value)
    }
    
    if (restaurant.restaurant) {

        return (
            <main>

                <div className="row col-12 resImg" style={{background: "url(https://www.cocinayvino.com/wp-content/uploads/2019/06/CocinaYVino_TAPAS_PorAndreinaContreras_IMG_4544-1200x675.jpg) no-repeat center center", backgroundSize: 'cover'}}>
                    <h2 className="title">{restaurant.restaurant.name}</h2>
                </div>

                <div className="row">
                    <div className="filters col-3">
                        <div className="inputs">
                            <h4 className="mt-2 mb-3 text-white filter-title">Reserva</h4>
                            <DatePicker
                                value={reservationDate}
                                onChange={value => setDate(value)}
                                // label="Fecha de reserva"
                                formatStyle="large"
                                className="item"
                            />

                            <Picklist
                                style={containerStyles}
                                placeholder="-- Seleccione turno --"
                                onChange={value => setTurn(value)}
                                value={turn}
                                hideLabel
                                className="item"
                            >  
                                <Option name="option 0" label="-- Seleccione turno --"/>
                                <Option name="option 1" label="Comida"/>
                                <Option name="option 2" label="Cena"/>
                            </Picklist>

                            <Picklist
                                style={containerStyles}
                                placeholder="-- Seleccione hora --"
                                onChange={value => setSelectedHour(value)}
                                value={selectedHour}
                                hideLabel
                                className="item"
                            >  
                                <Option name="option 0" label="-- Seleccione hora --"/>
                                {hours.map((hour, index) => (
                                    <Option name={"option " + index} label={hour}/>
                                ))}
                            </Picklist>

                            <button ref={ filter_button } className="btn btn-dark item disabled" onClick={filter}>Filtrar</button>
                        </div>
                    </div>
                    <div className="tableList col-9">
                        <ListTables filters={{date: reservationDate, hour: selectedHour, filtering: filtering}} changeFilter={setFilterFalse}/>
                    </div>
                        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
                </div>
            </main>
        )
    } else {
        return (
            <Suspense fallback={<h2>Loading...</h2>}> </Suspense>
        )
    }

}

export default Reservations