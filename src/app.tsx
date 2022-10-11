import React, { useEffect, useState } from "react";
import EventCard from "./components/EventCard/EventCard";
import { mutateData as sortDataByDate } from "./dataHelpers";
import { fetchEvents } from "./services/parties.api";
import { MutatedData } from "./types";


export default function App() {
  //Dates only
  const [dates, setDates] = useState<string[] | null>();
  //sorted Data
  const [sortedData, setsortedData] = useState<MutatedData | null>();
  //search
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    fetchEvents()
      .then((Response) => {
        const [dates, mutatedData] = sortDataByDate(Response);

        setDates(dates);
        setsortedData(mutatedData);
      })
      .catch(console.error);
  }, []);

  
  // Rule 1: React functional component ALWAYS returns a JSX (HTML)
  return (
    <>
      {/* Rule 2 : JS logic inside {} */}

      <input type="text" placeholder="Search..."
      onChange= {e => setQuery(e.target.value)}/> 

      {sortedData &&
        dates?.map((date) => {
          return (
            <>
              <h1> {date} </h1>
              <div className="flex-container">
                {sortedData[date].filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
                ).map((event) => (
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

