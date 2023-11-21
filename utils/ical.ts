import { ICalEventData } from "ical-generator";
import { EventType } from "./types";

const dateHasTime = (date: Date) =>
  date.getHours() !== 0 || date.getMinutes() !== 0 || date.getSeconds() !== 0;

const notNullOrUndefined = (data: any) => data !== undefined && data !== null;

export const createCalendarEvent =
  (baseUrl: string) =>
  (event: EventType): ICalEventData => {
    const date = new Date(event.date);
    const mainLink = baseUrl + event.link;
    const links = [
      mainLink,
      event.recording,
      event.register_link,
      event.livestream_link,
    ].filter(notNullOrUndefined);
    const sponsors = event.sponsors?.map((s) => `${s.name} (${s.link})`);

    const linksText = links.length ? ["Links:", ...links].join("\n") : "";
    const sponsorsText = sponsors?.length
      ? ["Sponsors:", ...sponsors].join("\n")
      : "";

    const description = event.description || "No Description";

    return {
      id: `${event.id}@0xA.at`, // TODO: It is RECOMMENDED that calendar user agents now generate "UID" values that are hex-encoded random Universally Unique Identifier (UUID) https://www.rfc-editor.org/rfc/rfc7986.html
      summary: event.title,
      description: `${description}\n\n${linksText}\n${sponsorsText}`,
      location: event.location,
      url: mainLink,

      // https://www.npmjs.com/package/ical-generator#-date-time--timezones
      start: date.toUTCString(),
      end: date.toUTCString(),
      timezone: "Europe/Vienna",
      allDay: !dateHasTime(date),
    };
  };
