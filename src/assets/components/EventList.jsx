import React, { useEffect, useState } from 'react'
import EventItems from './EventItems'

const EventList = () => {
  
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const res = await fetch("https://molnkurs-eventservice-g7hahqftgme6erb3.swedencentral-01.azurewebsites.net/api/Events")

    if (res.ok) {
      const response = await res.json()
      setEvents(response.result)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])
  
  return (
    
    <section id='events'>
      {
        events.map(event => (<EventItems key={event.id} item={event} />))
      }
    </section>
  )
}

export default EventList

