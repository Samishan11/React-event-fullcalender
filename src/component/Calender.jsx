import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Calender = ({ events }) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={"dayGridMonth"}
      headerToolbar={{
        start: "today prev,next", // will normally be on the left. if RTL, will be on the right
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
      }}
      events={events}
      eventDidMount={(info) => {
        return new bootstrap.Popover(info.el, {
          title: info.event.title,
          placement: "auto",
          trigger: "hover",
          customClass: "popoverStyle",
          content: "<p>Please subscribe<strong>Bootstrap popover</strong>.</p>",
          html: true,
        });
      }}
      height={"90vh"}
    />
  );
};

export default Calender;
