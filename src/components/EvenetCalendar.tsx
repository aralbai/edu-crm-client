"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    time: "12:00 PM - 2:00 PM",
    desctiption:
      "Lorem ipsum dolor sit amet. this is the text event description. Ho can i change it",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    time: "12:00 PM - 2:00 PM",
    desctiption:
      "Lorem ipsum dolor sit amet. this is the text event description. Ho can i change it",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    time: "12:00 PM - 2:00 PM",
    desctiption:
      "Lorem ipsum dolor sit amet. this is the text event description. Ho can i change it",
  },
];

export default function EvenetCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />

      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      {/* EVENTS  */}
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4  odd:border-t-[#c3ebfa] even:border-t-[#cfceff]"
            key={event.id}
          >
            <div className="flex justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>

            <p className="mt-2 text-gray-400 text-sm">{event.desctiption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
