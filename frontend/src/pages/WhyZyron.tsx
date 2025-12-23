import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import {
  Cpu,
  Layers,
  GitBranch,
  Users,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import ServicesExactUI from "../components/ServicesExactUI";
import PageHeader from "../components/PageHeader";
import Section from "../components/ui/Section";
import Eng from "../content/Eng";

/* ---------- Data ---------- */
interface FeatureItem {
  id: string;
  title: string;
  content: string[];
}

const features1: FeatureItem[] = [
  {
    id: "strategy",
    title: "Strategy and Planning",
    content: [
      "We define a clear roadmap for every project by aligning technical goals with business objectives.",
      "Our structured planning helps identify risks early and optimize resource utilization.",
      "This ensures predictable delivery timelines and successful execution from concept to completion.",
    ],
  },
  {
    id: "reliability",
    title: "Reliability",
    content: [
      "Reliability is embedded in every phase of our engineering process.",
      "Through rigorous verification and validation, we ensure consistent and dependable results.",
      "Our focus on quality minimizes failures and builds long-term trust with customers.",
    ],
  },
  {
    id: "understanding",
    title: "In-depth Understanding",
    content: [
      "Our team brings deep domain knowledge in semiconductor design and system architecture.",
      "We carefully analyze requirements to understand customer challenges and constraints.",
      "This enables us to deliver tailored solutions that meet both technical and business needs.",
    ],
  },
  {
    id: "reusability",
    title: "Reusability",
    content: [
      "We develop reusable IPs, frameworks, and verification components to accelerate development.",
      "Reusability reduces overall cost and shortens design cycles across projects.",
      "This approach ensures faster time-to-market and consistent quality in every engagement.",
    ],
  },
  {
    id: "scalability",
    title: "Scalability",
    content: [
      "Our solutions are designed to scale from small prototypes to complex SoC platforms.",
      "We build modular architectures that grow with evolving product requirements.",
      "This ensures long-term flexibility and supports future technology advancements.",
    ],
  },
  {
    id: "tracking",
    title: "Tracking",
    content: [
      "We continuously track project milestones, deliverables, and risks throughout execution.",
      "Regular status updates and reviews ensure complete transparency with stakeholders.",
      "This disciplined tracking keeps projects on schedule and aligned with expectations.",
    ],
  },
];
const reasons = [
  {
    icon: Clock,
    title: "Faster Time-to-Market",
    desc: "Our agile methodologies and reusable IP blocks significantly reduce design cycles, ensuring you beat the competition.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "Security is ingrained in our design process. We adhere to the strictest IP protection standards.",
  },
  {
    icon: CheckCircle,
    title: "First-Time-Right Silicon",
    desc: "Rigorous verification methodologies minimize re-spins and costly delays.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    desc: "We design modular architectures that scale seamlessly with your business needs.",
  },
];

const features = [
  {
    title: "Deep Domain Expertise",
    short: "Decades of semiconductor engineering experience.",
    more:
      "Our team brings decades of combined experience across ASIC, SoC, and advanced-node designs, enabling faster ramp-up and fewer design risks.",
  },
  {
    title: "Advanced Toolchains",
    short: "State-of-the-art EDA and automation flows.",
    more:
      "We leverage industry-leading EDA tools with custom automation to improve productivity, accuracy, and turnaround time across projects.",
  },
  {
    title: "Proven Methodologies",
    short: "Robust design and verification processes.",
    more:
      "From UVM-based verification to formal methods and emulation, our methodologies ensure high coverage and first-pass success.",
  },
  {
    title: "Flexible Engagement",
    short: "Engagement models tailored to your needs.",
    more:
      "We offer flexible engagement models including turnkey projects, staff augmentation, and long-term partnerships.",
  },
];

/* ---------- Types ---------- */

interface WhyService {
  id: string;
  title: string;
  icon: any;
  description: string;
  features: string[];
  benefits: string[];
}

/* ---------- Data ---------- */

const whyServicesData: WhyService[] = [
  {
    id: "design",
    title: "Design Services",
    icon: Cpu,
    description:
      "Comprehensive ASIC and SoC design services covering architecture, RTL development, and integration for high-performance silicon.",
    features: [
      "SoC & IP Architecture",
      "RTL Coding (Verilog/SystemVerilog)",
      "Low Power Design",
      "IP Integration",
    ],
    benefits: [
      "Optimized for PPA targets",
      "Faster development cycles",
      "Scalable architectures",
      "First-pass success",
    ],
  },
  {
    id: "verification",
    title: "Verification Services",
    icon: CheckCircle,
    description:
      "Robust functional verification ensuring design correctness using industry-proven methodologies.",
    features: [
      "UVM Testbenches",
      "Functional Coverage",
      "Regression Automation",
      "Formal Verification",
    ],
    benefits: [
      "Reduced silicon re-spins",
      "High coverage closure",
      "Improved product reliability",
      "Early bug detection",
    ],
  },
  {
    id: "fpga",
    title: "FPGA / Emulation Services",
    icon: Layers,
    description:
      "High-speed prototyping and emulation to validate complex SoCs before tapeout.",
    features: [
      "FPGA Prototyping",
      "Emulation Platforms",
      "Hardware/Software Co-debug",
      "Early Software Bring-up",
    ],
    benefits: [
      "Faster validation cycles",
      "Reduced project risks",
      "Early system visibility",
      "Accelerated time-to-market",
    ],
  },
  {
    id: "backend",
    title: "Backend Services",
    icon: GitBranch,
    description:
      "Physical implementation services transforming RTL into manufacturable layouts meeting aggressive PPA goals.",
    features: [
      "Floorplanning & PnR",
      "Clock Tree Synthesis",
      "Static Timing Analysis",
      "DRC/LVS Closure",
    ],
    benefits: [
      "Optimized power & performance",
      "Foundry-ready GDSII",
      "Improved yield",
      "Advanced node expertise",
    ],
  },
  {
    id: "staff",
    title: "Staff Augmentation",
    icon: Users,
    description:
      "Highly skilled engineers to seamlessly extend your in-house teams and accelerate project execution.",
    features: [
      "Onsite / Offshore Models",
      "Domain Experts",
      "Flexible Engagement",
      "Quick Ramp-up",
    ],
    benefits: [
      "Reduced hiring overhead",
      "Immediate productivity",
      "Cost-effective scaling",
      "Access to niche skills",
    ],
  },
  {
    id: "training",
    title: "Training Services",
    icon: GraduationCap,
    description:
      "Industry-focused training programs to upskill teams on advanced VLSI design and verification technologies.",
    features: [
      "RTL & Verification Training",
      "UVM Methodologies",
      "Physical Design Basics",
      "Hands-on Labs",
    ],
    benefits: [
      "Improved team productivity",
      "Latest industry practices",
      "Customized programs",
      "Practical exposure",
    ],
  },
];

/* ---------- Sidebar ---------- */

const WhyServicesSidebar: React.FC<{
  services: WhyService[];
  active: WhyService;
  onSelect: (s: WhyService) => void;
}> = ({ services, active, onSelect }) => (
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

const WhyServiceContent: React.FC<{ service: WhyService }> = ({ service }) => (
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
            Benefits
          </h3>
          <ul className="space-y-4">
            {service.benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                {b}
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
          Talk to Us
        </Link>
      </div>
    </motion.div>
  </AnimatePresence>
);

/* ---------- Reason Card ---------- */

const ReasonCard: React.FC<any> = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white border border-gray-200 p-8 rounded-2xl flex gap-6 shadow-sm hover:shadow-lg transition"
  >
    <div className="shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
      <Icon size={28} />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

/* ---------- Feature Card (Expandable) ---------- */

const FeatureCard: React.FC<any> = ({ title, short, more, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div>
          <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
          <p className="text-gray-600 text-sm mt-1">{short}</p>
        </div>
        <ChevronDown
          className={`text-blue-600 transition-transform ${open ? "rotate-180" : ""
            }`}
        />
      </div>

      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="text-gray-600 text-sm mt-4 leading-relaxed"
        >
          {more}
        </motion.p>
      )}
    </motion.div>
  );
};

/* ---------- CTA ---------- */

const WhyCTA: React.FC = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto bg-blue-600 rounded-3xl p-12 text-center text-white shadow-xl">
      <h2 className="text-3xl font-bold mb-6">
        Ready to start your next project?
      </h2>
      <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
        Join leading tech companies who trust Zyron for their critical silicon
        needs.
      </p>
      <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition">
        Schedule a Consultation
      </button>
    </div>
  </section>
);

/* ---------- Main Page ---------- */

const WhyZyron: React.FC = () => {
  return (
    <>
      <div className="min-h-screen w-full flex  overflow-hidden">
        <Navbar />

        <div className="flex-1 min-h-0 justify-center flex items-center">
          <PageHeader
            title="Why Partner with"
            highlight="Zyron?"
            subtitle="We combine deep domain expertise with cutting-edge tools to deliver exceptional semiconductor solutions."
            bgImage="https://plus.unsplash.com/premium_photo-1682144748274-add3d8ed04ea?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="70vh"
          />
        </div>
      </div>

      <div className=" bg-gray-50">

        {/* Reasons */}
        {/* <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((item, idx) => (
              <ReasonCard key={idx} {...item} index={idx} />
            ))}
          </div>
        </section> */}
        <Section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* <WhyServicesSidebar
              services={whyServicesData}
              active={active}
              onSelect={setActive}
            />
            <div className="lg:col-span-8">
              <WhyServiceContent service={active} />
            </div> */}

          </div>
          <ServicesExactUI features1={Eng.whyFeatures} />

        </Section>
        {/* Features */}
        {/* <section className="py-12 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strengths go beyond services — they define how we deliver value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, idx) => (
              <FeatureCard key={idx} {...f} index={idx} />
            ))}
          </div>
        </section> */}

        {/* <WhyCTA /> */}
      </div>
    </>
  );
};

export default WhyZyron;
