import { useEffect, useState, useCallback,useContext } from 'react'
import * as IncidentService from '../services/IncidentService'
export default function useIncidents(){
    const [ incident, setIncident ] = useState(null)
    useEffect(()=>{
        getIncident()
    },[])
    const getIncident = useCallback(async()=>{
        const res = await IncidentService.getIncident()
        const response = await res.json()
        setIncident(response)
    })

    return{
        incident:incident,
        getIncident
    }
}