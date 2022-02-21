import { useEffect, useState, useCallback, useContext } from 'react'
import * as ReservationService from '../services/ReservationService'
import UserContext from "../context/UserContext"

export function useCreateReservation() {
    const [reservation, setReservation] = useState();
    const [res, setRes] = useState();
    const { reser , setReser } = useContext(UserContext);
    const createReservation = useCallback(async (request_data) => {
        const resC = await ReservationService.createReservation(request_data);
        const data = await resC.json();
        setRes(resC)
        setReservation(data)
        setReser(!reser)
    }) 

    return {
        createReservation,
        reservation,
        setReservation,
        res,
        setRes
    }
}