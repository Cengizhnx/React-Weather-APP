import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { useWeather } from "../context/WeatherContext"

function Dashboard() {

    const { city } = useWeather()

    return (
        <div>
            <section class="vh-100" style={{ backgroundColor: '#C1CFEA' }}>
                <div class="container pt-3">

                    <div class="row d-flex flex-column justify-content-center align-items-center h-100" style={{ color: '#282828' }}>
                        <div class="col-md-9 col-lg-7 col-xl-8">

                            <div class="card mb-4 gradient-custom" style={{ borderRadius: 25 }}>
                                <div class="card-body p-4">

                                    <div id="demo1" class="carousel slide" data-ride="carousel">
                                        <ul class="carousel-indicators mb-0">
                                            <li data-target="#demo1" data-slide-to="0" class="active"></li>
                                            <li data-target="#demo1" data-slide-to="1"></li>
                                            <li data-target="#demo1" data-slide-to="2"></li>
                                        </ul>

                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="d-flex justify-content-between mb-3 pb-2">
                                                    <div>
                                                        <h2 class="display-2"><strong>{city.current.temp_c}°C</strong></h2>
                                                        <p class="mb-0">{city.location.name}, {city.location.country}</p>
                                                        <p class="text-muted mt-2 mb-0">{city.current.condition.text}</p>
                                                    </div>
                                                    <div>
                                                        <img src={(`${city.current.condition.icon}`)} alt="weather" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>





                        </div>

                        <div class="col-md-10 col-lg-10 col-xl-12 d-flex flex-row justify-content-center ">
                            <div class="card mb-4 me-4" style={{ borderRadius: 25 }}>
                                <div class="card-body p-4">

                                    <div id="demo3" class="carousel slide" data-ride="carousel">
                                        <ul class="carousel-indicators mb-0">
                                            <li data-target="#demo3" data-slide-to="0"></li>
                                            <li data-target="#demo3" data-slide-to="1"></li>
                                            <li data-target="#demo3" data-slide-to="2" class="active"></li>
                                        </ul>

                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <p class="ms-2 mb-3"><strong>🌡️ Bugünün Saatlik Hava Durumu</strong></p>

                                                <div class="d-flex justify-content-around text-center mb-1 pb-3 pt-2">
                                                    {
                                                        Object.values(city.forecast.forecastday).map((value, index) => (
                                                            <div class="flex-column" key={index}>
                                                                <p class="small"><strong>{city.forecast.forecastday[0].hour[index * 4].temp_c}°C</strong></p>
                                                                <i class="fas fa-sun fa-2x mb-3"><img src={(`${city.forecast.forecastday[0].hour[index * 4].condition.icon}`)} alt="weather" /></i>
                                                                <p class="mt-2 mb-0"><strong>{index * 4 + ":00"}</strong></p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="card col-md-5 mb-4 " style={{ borderRadius: 25 }}>
                                <div class="card-body p-4">

                                    <div id="demo2" class="carousel slide" data-ride="carousel">
                                        <ul class="carousel-indicators mb-0">
                                            <li data-target="#demo2" data-slide-to="0"></li>
                                            <li data-target="#demo2" data-slide-to="1" class="active"></li>
                                            <li data-target="#demo2" data-slide-to="2"></li>
                                        </ul>

                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <p class="ms-2 mb-3"><strong>☁️ 6 Günlük Hava Durumu</strong></p>

                                                <div class="d-flex justify-content-around text-center mb-3 pb-3 pt-2">
                                                    {

                                                        // Object.values(city).map((value, index) => (
                                                        //     <div class="flex-column" key={index}>
                                                        //         <p class="small"><strong>{city.forecast.forecastday[index].day.avgtemp_c}°C</strong></p>
                                                        //         <i class="fas fa-sun fa-2x mb-3"  ><img src={(`${city.forecast.forecastday[index].day.condition.icon}`)} alt="weather" /></i>
                                                        //         <p class="mt-2 mb-0">{index === 0 ? "Bugün" : city.forecast.forecastday[index].date}</p>
                                                        //     </div>
                                                        // ))

                                                        Object.values(city.forecast.forecastday).map((value, index) => (
                                                            city.forecast.forecastday.length > 0
                                                                ? <div class="flex-column" key={index}>
                                                                    <p class="small"><strong>{city.forecast.forecastday[index].day.avgtemp_c}°C</strong></p>
                                                                    <i class="fas fa-sun fa-2x mb-3"  ><img src={(`${city.forecast.forecastday[index].day.condition.icon}`)} alt="weather" /></i>
                                                                    <p class="mt-2 mb-0">{index === 0 ? "Bugün" : (index === 1 ? "Yarın" : city.forecast.forecastday[index].date)}</p>
                                                                </div>
                                                                : null
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section >
        </div >
    )
}

export default Dashboard