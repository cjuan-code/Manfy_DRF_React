import { useEffect, useState, useCallback,useContext } from 'react'
import * as ReservationService from '../services/ReservationService'
import toastr from 'toastr';
export default function useReservation(){
    const [reservation, setReservation] = useState([])
    const [ deleteStatus ,setDeleteStatus] = useState(false)
    const [ reserUser, setReserUser] = useState(null)
    useEffect(()=>{
        ReadReservation()
    },[deleteStatus,setDeleteStatus])

    const ReadReservation = useCallback(async()=>{
        const res = await ReservationService.getReservation()
        const response = await res.json()
        setReservation(response)
    });

    const DeleteReservation = useCallback(async(id)=>{
        const res = await ReservationService.deleteReservation(id)
        const response = await res.json()
        setDeleteStatus(true)
        toastr.success(`Reserva eliminada correctamente`)
    })
    const UserReservation = useCallback(async()=>{
        const res = await ReservationService.getReservationUser()
        const response = await res.json()
        setReserUser(response)
    })
    return{
        reservation:reservation,
        reserUser: reserUser,
        ReadReservation,
        DeleteReservation,
        UserReservation
    }
}