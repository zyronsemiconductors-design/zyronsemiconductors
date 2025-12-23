import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, FileCode, GitBranch, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ServicesExactUI from "../components/ServicesExactUI";
import PageHeader from "../components/PageHeader";
import Eng from "../content/Eng";

/* ---------- Types ---------- */

interface ServiceDetail {
  id: string;
  title: string;
  icon: any;
  description: string;
  features: string[];
  capabilities: string[];
}
interface ServiceItem {
  id: string;
  title: string;
  content: string[];
}


/* ---------- Data ---------- */
const services: ServiceItem[] = [
  {
    id: "design",
    title: "Design Services",
    content: [
      "Our design services provide end-to-end ASIC and SoC solutions, from specification to RTL implementation.",
      "We ensure optimized architectures using proven methodologies and deep domain expertise.",
      "Our focus is on delivering high performance, low power, and area-efficient designs.",
    ],
  },
  {
    id: "verification",
    title: "Verification Services",
    content: [
      "We offer comprehensive functional verification services using industry-standard UVM methodologies.",
      "Our verification process ensures maximum coverage and early bug detection.",
      "This helps minimize costly silicon re-spins and accelerates time-to-market.",
    ],
  },
  {
    id: "fpga",
    title: "FPGA/Emulation Services",
    content: [
      "FPGA services delivered by Reclk semiconductors are comprehensive and backed by several exceptional features:",
      "We roll out products after thorough testing, based on comprehensive design plans and sound knowledge of semiconductor engineering.",
      "Our distinguished process helps us make the most reliable and high-quality products.",
      "We make the product available to you in a very short time-to-market, even in spite of tight testing schedules.",
      "Reclk semiconductors ensures that the entire process including prototyping, platform selection and adaptation stages are executed by high caliber specialists in the field.",
    ],
  },
  {
    id: "backend",
    title: "Backend service",
    content: [
      "Our backend services cover physical implementation from RTL to GDSII.",
      "We focus on timing closure, power optimization, and DRC/LVS clean layouts.",
      "Expertise across advanced technology nodes ensures manufacturable designs.",
    ],
  },
  {
    id: "staff",
    title: "Staff augmentation",
    content: [
      "We provide highly skilled engineers to extend your in-house teams.",
      "Our flexible engagement model helps you scale resources quickly.",
      "Engineers integrate seamlessly into your workflows and processes.",
    ],
  },
  {
    id: "training",
    title: "Training services",
    content: [
      "Our training programs help engineers upskill in VLSI design and verification.",
      "Courses include RTL, UVM, physical design, and hands-on labs.",
      "Customized programs tailored to industry and academic needs.",
    ],
  },
];

const servicesData: ServiceDetail[] = [
  {
    id: "design",
    title: "Design & Verification",
    icon: Cpu,
    description:
      "Comprehensive RTL design and functional verification services ensuring bug-free silicon.",
    features: [
      "SoC Architecture",
      "RTL Coding (Verilog/VHDL)",
      "IP Integration",
      "Low Power Design",
    ],
    capabilities: [
      "UVM Methodologies",
      "Formal Verification",
      "Emulation",
      "Gate Level Simulation",
    ],
  },
  {
    id: "physical",
    title: "Physical Design",
    icon: GitBranch,
    description:
      "Transforming RTL to GDSII with industry-leading PPA (Power, Performance, Area) targets.",
    features: [
      "Floorplanning",
      "Place & Route",
      "Clock Tree Synthesis",
      "Static Timing Analysis",
    ],
    capabilities: [
      "7nm/5nm/3nm Nodes",
      "Low Power Implementation",
      "Signal Integrity Analysis",
      "Physical Verification (DRC/LVS)",
    ],
  },
  {
    id: "analog",
    title: "Analog Layout",
    icon: FileCode,
    description:
      "High-precision custom layout design for analog and mixed-signal circuits.",
    features: [
      "SerDes Layout",
      "PLL/DLL Layout",
      "ADC/DAC Layout",
      "Power Management",
    ],
    capabilities: [
      "FinFET Technologies",
      "Matching & Shielding",
      "Reliability Analysis (EM/IR)",
      "Parasitic Extraction",
    ],
  },
  {
    id: "software",
    title: "Software Support",
    icon: Terminal,
    description:
      "Embedded software and firmware solutions to bring your silicon to life.",
    features: [
      "Firmware Development",
      "Device Drivers",
      "Bootloaders",
      "RTOS Porting",
    ],
    capabilities: [
      "Post-silicon Validation",
      "Board Bring-up",
      "Performance Optimization",
      "System Validation",
    ],
  },
];

/* ---------- Sidebar ---------- */

interface SidebarProps {
  services: ServiceDetail[];
  active: ServiceDetail;
  onSelect: (s: ServiceDetail) => void;
}

const ServicesSidebar: React.FC<SidebarProps> = ({
  services,
  active,
  onSelect,
}) => (
  <div className="lg:col-span-4 space-y-4">
    {services.map((service) => {
      const Icon = service.icon;
      const isActive = active.id === service.id;

      return (
        <button
          key={service.id}
          onClick={() => onSelect(service)}
          className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center gap-4 group
          ${isActive
              ? "bg-blue-50 border-blue-500 shadow-md"
              : "bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50/50"
            }`}
        >
          <div
            className={`p-3 rounded-lg transition
            ${isActive
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 group-hover:text-blue-600"
              }`}
          >
            <Icon size={22} />
          </div>
          <h3
            className={`font-semibold transition ${isActive ? "text-blue-600" : "text-gray-800"
              }`}
          >
            {service.title}
          </h3>
        </button>
      );
    })}
  </div>
);

/* ---------- Content ---------- */

const ServiceContent: React.FC<{ service: ServiceDetail }> = ({ service }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={service.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg h-full"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        {service.title}
      </h2>
      <p className="text-gray-600 mb-10 leading-relaxed">
        {service.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-blue-600 font-bold mb-6 uppercase tracking-wider text-sm">
            Key Features
          </h3>
          <ul className="space-y-4">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-blue-600 font-bold mb-6 uppercase tracking-wider text-sm">
            Capabilities
          </h3>
          <ul className="space-y-4">
            {service.capabilities.map((cap, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t flex justify-end">
        <Link
          to="/contact"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Consult Now
        </Link>
      </div>
    </motion.div>
  </AnimatePresence>
);

/* ---------- Main Page ---------- */

const Services: React.FC = () => {
  // const [activeService, setActiveService] = useState(servicesData[0]);

  return (<>
    <div className="min-h-screen w-full flex  overflow-hidden">
      <Navbar />

      <div className="flex-1 min-h-0 justify-center flex items-center">
        <PageHeader
          title={Eng.headers.services.title}
          highlight={Eng.headers.services.highlight}
          subtitle={Eng.headers.services.subtitle}
          bgImage={Eng.headers.services.bgImage}
        />

      </div>
    </div>
    <div className=" bg-white">
      <ServicesExactUI features1={Eng.services} />

      {/* <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8"> */}
      {/* <ServicesSidebar
          services={servicesData}
          active={activeService}
          onSelect={setActiveService}
        />

        <div className="lg:col-span-8">
          <ServiceContent service={activeService} />
        </div> */}
      {/* </div> */}
    </div></>
  );
};

export default Services;
