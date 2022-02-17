import { useEffect, useState, useCallback,useContext } from 'react'
import * as ReservationService from '../services/ReservationService'
export default function useReservation(){
    const [reservation, setReservation] = useState([])

    useEffect(()=>{
        ReadReservation()
    },[])

    const ReadReservation = useCallback(async()=>{
        const res = await ReservationService.getReservation()
        const response = await res.json()
        setReservation(response)
    });

    return{
        reservation:reservation,
        ReadReservation
    }
}