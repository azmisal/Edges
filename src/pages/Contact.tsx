import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm"
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader"
const ContactPage = () => {
    
    return (
        <div className="min-h-screen p-4 pt-48 lg:pt-24">
            <PageHeader title="Contact Us"/>
            <ContactForm />
        </div>
    );
};

export default ContactPage;
