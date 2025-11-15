import React from 'react'
import {useReducer, useEffect} from 'react'
import { inventoryReducer, initialState } from '../reducers/InventoryReducer'
import { FETCH_ACTIONS } from '../actions'
import axios from 'axios'

const InventoryList = () => {
    const [state, dispatch] = useReducer(inventoryReducer, initialState);
    const { items, loading, error } = state;
    console.log(items, loading, error);
    useEffect(() => {
        dispatch({type: FETCH_ACTIONS.PROGRESS});
        const getItems = async () => {
            try{
                let response = await axios.get("http://localhost:3000/edibles");
                if (response.status === 200) {
                    dispatch({type: FETCH_ACTIONS.SUCCESS, data: response.data});
                }
            } catch{
                console.error(err);
                dispatch({type: FETCH_ACTIONS.ERROR, error: err.message})
            }
        }

        getItems();

    }, []);
    return (
        <div>InventoryList</div>
    )
}

export default InventoryList