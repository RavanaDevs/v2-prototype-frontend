"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer, Event, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Moment setup for localizer
const localizer = momentLocalizer(moment);

// Define the shape of the event data
interface LectureEvent extends Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

// Example events for the lecturer's schedule
const events: LectureEvent[] = [
  {
    id: 1,
    title: "Room 101", // Put only the room name here
    start: new Date(2024, 9, 5, 10, 0), // Date (Year, Month (0-indexed), Day, Hour, Minute)
    end: new Date(2024, 9, 5, 12, 0),
  },
  {
    id: 2,
    title: "Room 202",
    start: new Date(2024, 9, 7, 14, 0),
    end: new Date(2024, 9, 7, 16, 0),
  },
  {
    id: 3,
    title: "Room 303",
    start: new Date(2024, 9, 12, 9, 0),
    end: new Date(2024, 9, 12, 11, 0),
  },
  {
    id: 4,
    title: "Room 303",
    start: new Date(2024, 11, 12, 9, 0),
    end: new Date(2024, 11, 12, 11, 0),
  },
];

export default function Schedule() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentView, setCurrentView] = useState<View>("month");

  return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-[#0E46A3] mb-6">
          Lecturers Schedule
        </h2>

        <Calendar<LectureEvent>
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          views={["month"]}
          date={currentDate} // Set current date from state
          view={currentView} // Set current view from state
          onNavigate={(date) => setCurrentDate(date)}
          onView={(view) => setCurrentView(view)}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: "#0E46A3", // Color for highlighting events
              color: "white", // Text color
              borderRadius: "4px",
              padding: "4px",
            },
          })}
          components={{
            event: ({ event }) => (
              <span>
                <strong>{event.title}</strong>{" "}
                {/* Display the lecture hall name */}
              </span>
            ),
          }}
        />
      </div>
  );
}
