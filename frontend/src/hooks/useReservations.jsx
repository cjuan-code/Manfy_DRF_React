import { useEffect, useState, useCallback } from 'react'
import * as ReservationService from '../services/ReservationService'

export function useCreateReservation() {
    const [reservation, setReservation] = useState();
    const [res, setRes] = useState();
    
    const createReservation = useCallback(async (request_data) => {
        const resC = await ReservationService.createReservation(request_data);
        const data = await resC.json();

        setRes(resC)
        setReservation(data)
    }) 

    return {
        createReservation,
        reservation,
        setReservation,
        res,
        setRes
    }
}