/**
 * Hi was geht :)
 * @param data
 * @response
 */

import { MutatedData, Party } from "./types";

export function mutateData(data: Party[]): [string[], MutatedData] {
  let mutatedData = new Object() as MutatedData;

  // Step 1: Loop through data

  const dates = Array.from(new Set(data.map((party) => party.date)));
  
  const sortedDates = dates.sort((a,b)=> new Date(b)-a)

  for (let j = 0; j < sortedDates.length; j++) {
    const key = sortedDates[j];
    Object.assign(mutatedData, { [key]: [] });
  }

  // Step 3: push the whole event in the value of that key of type array
  for (let i = 0; i < data.length; i++) {
    const event = data[i];
    mutatedData[event.date].push(event);
  }

  return [sortedDates, mutatedData];
}

// Homework
// const obj = new Object()
// const arr = []
