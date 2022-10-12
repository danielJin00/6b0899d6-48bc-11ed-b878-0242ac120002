import { Event } from "./types";
/**
 * This Helperfunction Sorts the Events and adds the inCart Boolean Key Value
 * @param data
 * @response sorts the dates and sorts events
 */
export function mutateData(data: Event[]): [string[], Event[]] {
    //rm duplicates
    const dates = Array.from(new Set(data.map((event) => event.date)));
    //sort dates and events
    const sortedDates = dates.sort(
        (A_date, B_date) =>
            new Date(A_date).getTime() - new Date(B_date).getTime()
    );

    const sortedEvents = data.sort(
        (event_a, event_b) =>
            new Date(event_a.date).getTime() - new Date(event_b.date).getTime()
    );

    const mutatedEvents = sortedEvents.map((event) => {
        event.inCart = false;
        return event;
    });

    return [sortedDates, mutatedEvents];
}
