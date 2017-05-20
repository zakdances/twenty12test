export interface Event {
    eventName: string,
    eventDate: number,
    eventStatus: string,
    registrants: number
}

export function newEvent(eventName: string, eventDate: number, eventStatus: string, registrants: number): Event {
    return {
        eventName: eventName,
        eventDate: eventDate,
        eventStatus: eventStatus,
        registrants: registrants
    }
}

// export class Event {
//     // eventName: string;
//     // eventDate: number;
//     // eventStatus: string;
//     // registrants: number;

//     constructor(public eventName, public eventDate, public eventStatus, public registrants) {
        
//     }


// }