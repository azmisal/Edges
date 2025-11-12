import ContactForm from "@/components/ContactForm"
import PageHeader from "@/components/PageHeader"
import CompanyDesc from "@/components/CompanyDescription"
import LeadershipSection from "@/components/LeadershipBoard";


const AboutPage = () => {
    
    return (
        <div className="min-h-screen p-4 pt-48 lg:pt-24">
            <PageHeader title="About Us"/>
            <CompanyDesc/>
            <LeadershipSection />
        </div>
    );
};

export default AboutPage;
