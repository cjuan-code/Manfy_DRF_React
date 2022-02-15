import React, { Suspense, useEffect } from 'react'
import { useTablesByRestaurant, useFreeTablesByRestaurant } from "../../hooks/useTables";
import "./ListTables.css"

const ListTables = (props) => {

    const restaurant_id = localStorage.getItem('restaurant_id');

    const tables = useTablesByRestaurant(restaurant_id);

    const {freeTables, setTables, listTables} = useFreeTablesByRestaurant()

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

            listTables(request_data)

        }

        props.changeFilter(false);

    }, [props.filters])

    if (tables.tables) {
        return (
            <div className='container-list row'>
                <h2>Mesas</h2>
                { tables.tables.map((table)=> (
                    <div key={table.id} className="card-tables d-flex flex-wrap p-1 mr-3 mb-3 justify-content-center">
                        <div className="card p-2 card-reser">
                            <img alt="" src="data:image/jpeg;base64,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"/>
                            <h5 className="reser-descrip">Mesa {table.id}</h5>
                            <p className='reser-descrip'>Plazas: {table.capacity}</p>
                            <button id={table.id+"_button"} className='btn btn-dark disabled'>Reservar</button>
                            <div id={table.id} className='square'></div>
                            {/* <Link className="btn btn-dark text-white" to="reservations" onClick={(e)=>saveID(restaurant.id)}>Descubreme</Link> */}
                        </div>
                    </div>
                )) }
            </div>
        )
    } else {
        return (
            <Suspense fallback={<h2>Loading...</h2>}> </Suspense>
        )
    }
    
}

export default ListTables