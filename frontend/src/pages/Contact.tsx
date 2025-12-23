import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Section from "../components/ui/Section";
import ContactSection from "../components/ContactSection";
import PageHeader from "../components/PageHeader";
import Eng from "../content/Eng";

/* ---------- Info Card ---------- */

const InfoItem: React.FC<{
  icon: any;
  title: string;
  children: React.ReactNode;
}> = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
      <Icon />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

/* ---------- Main Page ---------- */

const Contact: React.FC = () => {
  return (
    <>
      <div className="min-h-screen w-full flex  overflow-hidden">
        <Navbar />

        <div className="flex-1 min-h-0 justify-center flex items-center">
          <PageHeader
            title={Eng.headers.contact.title}
            highlight={Eng.headers.contact.highlight}
            subtitle={Eng.headers.contact.subtitle}
            bgImage={Eng.headers.contact.bgImage}
          />

        </div>
      </div>
      <Section>
        <ContactSection data={Eng.Common.contactInfo} />
      </Section>
    </>
  );
};

export default Contact;
