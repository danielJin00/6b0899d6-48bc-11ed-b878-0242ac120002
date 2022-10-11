// eslint-disable-next-line
/**
 * 
 * @param data
 * @response
 */
import { MutatedData, Party } from "./types";

export function mutateData(data: Party[]): [string[], MutatedData] {
  //Initalize
  let mutatedData = new Object() as MutatedData;
  //rm duplicates
  const dates = Array.from(new Set(data.map((party) => party.date)));
  //convert string to dates
  const tempsortedDates = dates.map((obj) => new Date(obj));
  // sort dates low to high
  const temp2sortedDates= tempsortedDates.sort( (A_date, B_date ) => 
  A_date.getTime() - B_date.getTime());
  //convert back to string
  const stringsortedDates = temp2sortedDates.map((i) => i.toString())
  //initalize array value to date keys
  for (let date = 0; date < stringsortedDates.length; date++) {
    const key = stringsortedDates[date];
    Object.assign(mutatedData, { [key]: [] });
  }
  
  // push the whole event in the value of that key of type array
  for (let j = 0; j < data.length; j++) {
    let tempParty = data[j];
    let tempdate = (new Date(tempParty.date)).toString();
    mutatedData[tempdate].push(tempParty);
  }
  console.log(data);
  return [stringsortedDates, mutatedData];
}
// Homework
// const obj = new Object()
// const arr = []