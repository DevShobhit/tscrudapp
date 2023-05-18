import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useQuery } from 'react-query'
import axios from 'axios'
import 'leaflet/dist/leaflet.css'
import MapIcon from '../assets/svgs/mapicon.svg'
import { Icon } from 'leaflet'
import { CountryData } from '../interfaces/countryData'

const markerIcon = new Icon({
  iconUrl: MapIcon,
  iconSize: [20, 20],
})

export const Maps = (): JSX.Element => {
  const fetchCountriesData = async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/countries')
    return response.data
  }

  const { data, isLoading, isError } = useQuery<CountryData[]>(
    'countries',
    fetchCountriesData
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

  return (
    <div className='p-6 text-center pt-20 sm:ml-60 '>
      <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg'>
        <MapContainer
          center={[0, 0]}
          zoom={3}
          style={{ height: '80vh', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {data?.map((country) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
              icon={markerIcon}
            >
              <Popup>
                <h2 className='font-bold'>{country.country}</h2>
                <p className='text-sky-700'>Active Cases: {country.active}</p>
                <p className='text-green-600'>Recovered: {country.recovered}</p>
                <p className='text-red-600'>Deaths: {country.deaths}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}
