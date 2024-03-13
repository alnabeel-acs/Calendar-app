import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const events = [
    {
      title: "Test Event",
      start: "2024-03-13", // Should be in ISO 8601 format
      end: "2024-03-13" // Should be in ISO 8601 format
    }
  ];

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
