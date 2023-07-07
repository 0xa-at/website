import ical from "ical-generator";
import { getAllEvents } from "../utils/api";
import { createCalendarEvent } from "../utils/ical";
import fs from "fs";
import { EventType } from "../utils/types";

const baseUrl = "https://0xa.at";

const createMainCalendar = () => {
  const calendar = ical({ name: "0xA Event Calendar" });
  const events = getAllEvents()
    .filter((e) => !e.hidden)
    .map(createCalendarEvent(baseUrl));
  calendar.events(events);
  return calendar;
};

const createEventCalendar = (event: EventType) => {
  const calendar = ical({ name: event.title });
  calendar.events([createCalendarEvent(baseUrl)(event)]);
  return calendar;
}

fs.writeFileSync("./public/events.ics", createMainCalendar().toString());
fs.mkdirSync("./public/events", { recursive: true });
for(const event of getAllEvents()) {
  if(event.hidden) continue;
  fs.writeFileSync(`./public/events/${event.id}.ics`, createEventCalendar(event).toString());
}
