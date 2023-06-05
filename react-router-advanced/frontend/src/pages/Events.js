import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    // if(data.isError) {
    //     return <p>{data.message}</p>;
    // }

    return (
        <EventsList events={events} />
    );

    // return (
    //     <EventsList />
    // )
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //return {isError: true, message: 'Could not fetch events!'};  
        //throw new Response(JSON.stringify({message: 'Could not fetch events!'}), {status: 500}); 
        
        throw json(
            {message: 'Could not fetch events!'},
            {status: 500}
        );
    } else {
        // const resData = await response.json();
        // //return resData.events;

        // const res = new Response('any data', {status: 201});
        // return res;

        return response;
    }
}