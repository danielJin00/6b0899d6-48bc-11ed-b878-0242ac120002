import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { mutateData as sortDataByDate } from "./dataHelpers";
import { fetchEvents } from "./services/events.api";
import { Event } from "./types";
import EventCard from "./components/EventCard/EventCard";
import './app.css'
export default function App() {
    //Dates only
    const [dates, setDates] = useState<string[] | null>(null);
    //sorted Data
    const [sortedData, setSortedData] = useState<Event[] | null>(null);
    //search
    const [query, setQuery] = useState(" ");

    //formate date
    useEffect(() => {
        fetchEvents()
            .then((Response) => {
                const [dates, mutatedData] = sortDataByDate(Response);

                setDates(dates);
                setSortedData(mutatedData);
            })
            .catch(console.error);
    }, []);

    // Rule 1: React functional component ALWAYS returns a JSX (HTML)
    return (
        <>
            {/* Rule 2 : JS logic inside {} */}
            <Header
                setQuery={setQuery}
                setSortedData={setSortedData}
                sortedData={sortedData}
            />
            
            <div className="cardbody">
            {sortedData &&
                dates?.map((date) => {
                    //formate Date
                    const splittedDate= date.split(/[-,T]/);
                    const tempformatedDate = (new Date(parseInt(splittedDate[0]),parseInt(splittedDate[1])-1,parseInt(splittedDate[2]))).toString()
                    const stringFormatedDate = tempformatedDate.split(' ')
                    const formatedDate = (stringFormatedDate.splice(0,4)).join(" ")

                    return (
                        <>
                            <h1 className="sticky-div">  {formatedDate} </h1>
                            <div className="dateEvent-container">
                            
                                {sortedData
                                    //event in cart
                                    .filter(
                                        (event) =>
                                            event.date === date && !event.inCart
                                    )
                                    //event in search
                                    .filter((item) =>
                                        item.title
                                            .toLowerCase()
                                            .includes(query.toLowerCase())
                                    )
                                    .map(
                                        (event) =>
                                            !event.inCart && (
                                                <div className="singleEvent">
                                                <EventCard
                                                    event={event}
                                                    sortedData={sortedData}
                                                    setSortedData={
                                                        setSortedData
                                                    }
                                                />
                                                </div>
                                            )
                                    )}
                            </div>
                            
                        </>
                    );
                })}
                </div>
        </>
        
    );
}
