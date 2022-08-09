import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const [weather, setWeather] = useState("İstanbul")
    const [city, setCity] = useState({
        location: "",
        current: {
            condition: ""
        },
        forecast: {
            forecastday: {
                0: {
                    day: {
                        condition: ""
                    },
                    hour: {
                        6: {
                            condition: ""
                        },
                        10: {
                            condition: ""
                        },
                        14: {
                            condition: ""
                        },
                        18: {
                            condition: ""
                        },
                        23: {
                            condition: ""
                        }
                    }
                },
                1: {
                    day: {
                        condition: ""
                    }
                },
                2: {
                    day: {
                        condition: ""
                    }
                },
                3: {
                    day: {
                        condition: ""
                    }
                },
                4: {
                    day: {
                        condition: ""
                    }
                }
            }
        },
    });

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=7342f09273a04cd882c111254220608&q=${weather}&days=5&aqi=no&alerts=no&lang=tr`)
            .then(response => response.json())
            .then(data => setCity(data))
            .catch(err => console.error(err));
    }, [weather])
    const values = { weather, setWeather, city }

    return <WeatherContext.Provider value={values} >{children}</WeatherContext.Provider>

}

// function getWeather(weather) {
//     fetch(`https://api.weatherapi.com/v1/forecast.json?key=7342f09273a04cd882c111254220608&q=${weather}&days=5&aqi=no&alerts=no&lang=tr`)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
// }

export const useWeather = () => useContext(WeatherContext);