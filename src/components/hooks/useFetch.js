import { useEffect, useState } from "react";
import { getCurrentConditions, getForecast } from "../services/accuweather";

export const useFetch  = (selectedCity) =>{

    const initialState = {
        data:[],
        loading:true
    }
    
    const [currentConditions, setCurrentConditions] = useState(initialState)
    const [forecast, setForecast] = useState(initialState)
    
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
            
           setTimeout(() => {
               
               setCurrentConditions({
                   data: currentConditions,
                   loading:false
               })
           }, 2000);

        
        })
        .catch(e => console.log(e))

        getForecast(selectedCity)
        .then(forecast => {
            setTimeout(() => {
                
                setForecast({
                    data: forecast,
                    loading:false
                    
                })
            }, 2000);
        })
        .catch(e => console.log(e))
        
    }, [selectedCity]);

    return {
        currentConditions,
        forecast,
        reset
    };
}