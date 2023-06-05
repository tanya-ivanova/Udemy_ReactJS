import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    const error = useRouteError();

    let title = 'An error occurred';
    let message = 'Something went wrong!';

    if (error.staus === 500) {
        // message = JSON.parse(error.data).message;
        message = error.data.message;
    }

    if (error.staus === 400) {
        title = 'Not found';
        message = 'Could not find resource or page'
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
};

export default ErrorPage;