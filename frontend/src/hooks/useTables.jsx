import { useEffect, useState, useCallback } from 'react'
import * as TableService from '../../src/services/TableServices'

export function useTablesByRestaurant(restaurant_id) {
    const [tables, setTables] = useState();

    useEffect(() => {
        listTables();
    }, [])

    const listTables = useCallback(async () => {
        const res = await TableService.listTablesByRestaurant(restaurant_id)
        const data = await res.json();

        setTables(data)
    });

    return {
        listTables,
        tables: tables
    }
}

export function useFreeTablesByRestaurant(data) {
    const [freeTables, setTables] = useState();

    const listTables = useCallback(async (request_data) => {
        const res = await TableService.listFreeTablesByRestaurant(request_data)
        const data = await res.json();

        setTables(data)
    });

    return {
        listTables,
        freeTables,
        setTables
    }
}