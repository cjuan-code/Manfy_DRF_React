import { useEffect, useState, useCallback,useContext } from 'react'
import * as IncidentService from '../services/IncidentService'
import toastr from 'toastr';
export default function useIncidents(){
    const [ incident, setIncident ] = useState(null)
    const [ deleteIncident, setDeleteIncident ] =useState(null)
    useEffect(()=>{
        getIncident()
    },[])
    const getIncident = useCallback(async()=>{
        const res = await IncidentService.getIncident()
        const response = await res.json()
        setIncident(response)
    })
    const createIncident = useCallback(async(data)=>{
        const res = await IncidentService.createIncident(data)
        const response = await res.json()
        setDeleteIncident(response)
        toastr.success(`Incidencia enviada correctamente`)
    })
    return{
        incident:incident,
        deleteIncident,
        setDeleteIncident,
        createIncident,
        getIncident
    }
}