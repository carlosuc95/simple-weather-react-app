import { useEffect, useState } from "react";
import { getCurrentConditions, getForecast } from "../services/accuweather";

export const useFetch  = (selectedCity) =>{

    const initialState = {
        data:[],
        loading:true
    }
    
    const [currentConditions, setCurrentConditions] = useState(initialState)
    const [forecast, setForecast] = useState(initialState)
    const [error, setError] = useState(null)    
    
    const reset = () => {
        setForecast({
            ...forecast,
            loading: true
        })
        setCurrentConditions({
            ...currentConditions,
            loading: true
        })
    }
    useEffect(() => {
        
        getCurrentConditions(selectedCity)
        .then(currentConditions => {
            setCurrentConditions({
                data: currentConditions,
                loading:false
            })
            
            
            
        })
        .catch(e => {
            console.log(e)
            setError('Failed to fetch, try changing the API KEY');
        })
        
        getForecast(selectedCity)
        .then(forecast => {
            
            
            setForecast({
                data: forecast,
                loading:false
                
            })
            
        })
        .catch(e => {
            console.log(e)
            setError('Failed to fetch, try changing the API KEY');
        })
       
    }, [selectedCity]);

    return {
        currentConditions,
        forecast,
        reset,
        error
    };
}