import { parse, isValid } from "date-fns";

const DATE_FORMATS = ["yyyy-MM-dd", "yyyy-MM-dd HH:mm"];
const TIME_RANGE_REGEX = / (\d{2}:\d{2})-(\d{2}:\d{2})$/;

export function parseEventDate(date: string): Date {
  for (const format of DATE_FORMATS) {
    const result = parse(date, format, new Date());
    if (isValid(result)) return result;
  }

  const match = date.match(TIME_RANGE_REGEX);
  if (match) {
    const dateWithoutRange = date.replace(TIME_RANGE_REGEX, "");
    const result = parse(dateWithoutRange + " " + match[1], "yyyy-MM-dd HH:mm", new Date());
    if (isValid(result)) return result;
  }

  throw new Error(`Invalid event date format: ${date}`);
}
