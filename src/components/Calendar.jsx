import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from the URL
    fetch("https://calendar-api-a5m2.onrender.com/get_requests")
      .then(response => response.json())
      .then(data => {
        // Process the fetched data and set it as events
        const processedEvents = data.map(item => ({
          title: item.event_name,
          start: item.event_date, // Should be in ISO 8601 format
          end: item.event_date // Should be in ISO 8601 format
        }));
        console.log(processedEvents,"wwerwerer")
        setEvents(processedEvents);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay" // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        events={events}
      />
    </div>
  );
}

export default Calendar;
