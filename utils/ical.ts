import { ICalEventData } from "ical-generator";
import { EventType } from "./types";
import { parse, isValid } from "date-fns";

const parseDate = (date: string) => {
  const dateWithoutTimeFormat = "yyyy-MM-dd";
  const dateWithoutTime = parse(date, dateWithoutTimeFormat, new Date());
  if (isValid(dateWithoutTime)) {
    return {start: dateWithoutTime, end: dateWithoutTime, hasTime: false};
  }
  const dateWithTimeFormat = "yyyy-MM-dd HH:mm";
  const dateWithTime = parse(date,dateWithTimeFormat, new Date());
  if (isValid(dateWithTime)) {
    return {start: dateWithTime, end: dateWithTime, hasTime: true};
  }
  const dateWithTimeRangeRegex = / (\d{2}:\d{2})-(\d{2}:\d{2})$/;
  const match = date.match(dateWithTimeRangeRegex);
  if (match) {
    const dateStringWithoutTime = date.replace(dateWithTimeRangeRegex, "");
    const startTime = match[1];
    const endTime = match[2];
    const start = parse(dateStringWithoutTime + " " + startTime, dateWithTimeFormat, new Date());
    const end = parse(dateStringWithoutTime + " " + endTime, dateWithTimeFormat, new Date());
    if (isValid(start) && isValid(end)) {
      return {start, end, hasTime: true};
    }
  }

  throw new Error(`Invalid date format: ${date}; expected formats: "${dateWithoutTimeFormat}" or "${dateWithTimeFormat}" or a date with a time range "${dateWithTimeRangeRegex}"`);
};

const notNullOrUndefined = (data: any) => data !== undefined && data !== null;

export const createCalendarEvent =
  (baseUrl: string) =>
  (event: EventType): ICalEventData => {
    const date = parseDate(event.date);
    if (date.start === date.end) {
      console.warn(`[Warning] Event ${event.title} has the same start and end date: ${date.start}`)
    }

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
      start: date.start.toUTCString(),
      end: date.end.toUTCString(),
      timezone: "Europe/Vienna",
      allDay: !date.hasTime,
    };
  };
