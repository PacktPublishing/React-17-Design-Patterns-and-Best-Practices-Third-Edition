import { useState, useEffect } from 'react'
import Geolocation from './Geolocation'

const GeolocationContainer = () => {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)

  const handleSuccess = ({ coords: { latitude, longitude } }: { coords: { latitude: number; longitude: number }}) => { 
    setLatitude(latitude) 
    setLongitude(longitude)
  }

  useEffect(() => { 
    if (navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition(handleSuccess)
    } 
  }, [])


  return ( 
    <Geolocation latitude={latitude} longitude={longitude} /> 
  )
}

export default GeolocationContainer