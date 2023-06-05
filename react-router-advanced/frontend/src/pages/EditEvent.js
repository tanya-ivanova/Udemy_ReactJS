import { useRouteLoaderData } from 'react-router-dom';
import EditForm from '../components/EventForm';

function EditEventPage() {
    const data = useRouteLoaderData('event-detail');    

    return (
        <EditForm event={data.event} />
    );
}

export default EditEventPage;