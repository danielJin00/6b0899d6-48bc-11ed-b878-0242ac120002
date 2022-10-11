import React, { useEffect, useState } from "react";
import EventCard from "./components/EventCard/EventCard";

import { mutateData as sortDataByDate } from "./helpers";
import { fetchEvents } from "./services/parties.api";
import { MutatedData } from "./types";

export default function App() {
  const [dates, setDates] = useState<string[] | null>();
  const [sortedData, setsortedData] = useState<MutatedData | null>();

  useEffect(() => {
    fetchEvents()
      .then((Response) => {
        const [dates, mutatedData] = sortDataByDate(Response);

        setDates(dates);
        setsortedData(mutatedData);
      })
      .catch(console.error);
  }, []);

  //Sort Date
  //1. map dates
  //2. map array
  //

  // Rule 1: React functional component ALWAYS returns a JSX (HTML)
  return (
    <>
      {/* Rule 2 : JS logic inside {} */}

      {sortedData &&
        dates?.map((date) => {
          return (
            <>
              <h1> {date}</h1>
              <div className="flex-container">
                {sortedData[date].map((event) => (
                  <div className="child">
                    <EventCard party={event} />
                  </div>
                ))}
              </div>
            </>
          );
        })}
    </>
  );
}
