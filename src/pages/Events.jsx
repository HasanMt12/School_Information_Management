import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { readAllEvents } from '../services/index/eventPost';

const CountdownTimer = ({ eventDate, onEventEnd }) => {
    const getTimeRemaining = (endDate) => {
      const now = new Date();
      const targetDate = new Date(endDate);
      const timeDifference = targetDate - now;
  
      if (timeDifference <= 0) {
        return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      return { total: timeDifference, days, hours, minutes, seconds };
    };
  
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(eventDate));
  
    useEffect(() => {
      const timerInterval = setInterval(() => {
        const remaining = getTimeRemaining(eventDate);
        setTimeRemaining(remaining);
  
        if (remaining.total <= 0) {
          clearInterval(timerInterval);
          onEventEnd(); // Trigger callback when the event is over
        }
      }, 1000);
  
      // Cleanup interval on component unmount
      return () => clearInterval(timerInterval);
    }, [eventDate, onEventEnd]);
  
    return (
      <div>
        <p className='text-sm '>{`${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes remaining`}</p>
        {/* <p className='text-sm '>{`${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes, ${timeRemaining.seconds} seconds remaining`}</p> */}
      </div>
    );
  };

const EventsUi = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllEvents();
        // console.log(data.data);
        setEvents(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleEventEnd = () => {
    // Logic to remove the event from the state or perform any other actions
    console.log("Event is over!");
  };

  return (
    <div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-20 md:px-12 px-6 md:mt-6 md:mb-12 mt-3 mb-6'>
        {events && events.map((event, index) => (
          <div key={index}>
            
            {event.eventDate && (
              <Card className="py-4 w-fit">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{event.title}</p>
                  <small className="text-default-500">{new Date(event.eventDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</small>
                  <h4 className="font-bold text-large">{event.address}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-full"
                    src={event.image}
                    width={270}
                  />
                  <CountdownTimer eventDate={event.eventDate} onEventEnd={handleEventEnd} />
                </CardBody>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsUi;
