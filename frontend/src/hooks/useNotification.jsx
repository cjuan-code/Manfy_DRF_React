import { useEffect, useState, useCallback,useContext } from 'react'
import * as NotificationService from '../services/NotificationService'
export default function useNotification(){
    const [ countNotification, setCountNotify ] = useState(null)
    useEffect(()=>{
        countNotify()
    },[])
    const countNotify = useCallback(async()=>{
        const res = await NotificationService.countNotify()
        const response = await res.json()
        setCountNotify(response)
    })

    return{
        countNotification:countNotification,
        countNotify
    }
}