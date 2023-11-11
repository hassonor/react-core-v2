import NewsletterSignup from '../components/NewsletterSignup';
import PageContent from '../components/PageContent';
import { FC } from "react";

const NewsletterPage: FC = () => {
    return (
        <PageContent title="Join our awesome newsletter!">
            <NewsletterSignup/>
        </PageContent>
    );
}

export default NewsletterPage;
