// import { useState } from 'react'
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';
import { useWeather } from "../context/WeatherContext"
import { useState } from 'react'
import Alert from '@mui/material/Alert';

function Weather() {

    const { weather, setWeather } = useWeather()
    const [query, setQuery] = useState('');
    const [aaa, setAaa] = useState(true);

    function clicks(e) {
        e.preventDefault();

        if (query.trim() !== '') {
            setWeather(weather !== " " ? query : console.log("bos"))
            setQuery('');
        }
        else {
            setAaa(aaa === true ? false : true)
        }
    }

    return (
        <div>
            <section style={{ backgroundColor: '#C1CFEA' }}>
                <div class="d-flex flex-column justify-content-center align-items-center pt-5 pb-0">

                    <MDBInputGroup tag="form" className='d-flex w-50'>
                        <input  value={query} className='form-control' placeholder="İl Giriniz" aria-label="Search" type='Search' onChange={(e) => setQuery(e.target.value)} />
                        <MDBBtn type='submit' onClick={(e) => clicks(e)} outline>Ara</MDBBtn>
                    </MDBInputGroup>

                    <Alert className='alert' variant="filled" hidden={aaa} severity="error">
                        Şehir İsmi Giriniz !
                    </Alert>
                </div>
            </section >
        </div >
    )
}



export default Weather