import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function RiskSignalIcon({ className = "h-6 w-6" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="M8 12h3l1-3 2 6 1-3h1" />
    </svg>
  );
}

function CubeIcon({ className = "h-6 w-6" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2Z" />
      <path d="M12 11 4.4 6.7" />
      <path d="M12 11v9" />
      <path d="m12 11 7.6-4.3" />
    </svg>
  );
}

function SparkIcon({ className = "h-6 w-6" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v5" />
      <path d="M12 17v5" />
      <path d="m4.9 4.9 3.5 3.5" />
      <path d="m15.6 15.6 3.5 3.5" />
      <path d="M2 12h5" />
      <path d="M17 12h5" />
      <path d="m4.9 19.1 3.5-3.5" />
      <path d="m15.6 8.4 3.5-3.5" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

const products = [
  {
    name: "Vorisc",
    label: "Risk intelligence",
    description: "For trade corridor risk visibility, origin confidence index, verification workflows, and decision-support intelligence for organizations.",
    Icon: RiskSignalIcon,
    href: "https://vorisc.fulscann.com",
    accent: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-700",
  },
  {
    name: "VeriLab",
    label: "Business trust",
    description: "For SME diagnostics, internal control mechanism, and operational intelligence.",
    Icon: CubeIcon,
    href: "https://verilab.fulscann.com",
    accent: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    name: "Intelia",
    label: "Capability transfer",
    description: "Training brokerage, learner access, trainer discovery, and practical skill-transfer infrastructure.",
    Icon: SparkIcon,
    href: "https://intelia.fulscann.com",
    accent: "from-violet-500 to-fuchsia-500",
    bg: "bg-violet-50",
    text: "text-violet-700",
  },
];

const principles = ["Capture", "Verify", "Score", "Guide"];

const deliverables = [
  "Structured diagnostics",
  "Compliance infrastructure",
  "Risk intelligence",
  "Institution dashboards",
  "Predictive signals",
  "maturity scoring",
];

function LogoMark() {
  return (
    <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-slate-950 shadow-lg shadow-blue-200">
      <div className="absolute -left-2 top-1 h-5 w-12 rotate-[-18deg] rounded-full bg-gradient-to-r from-amber-400 to-orange-400" />
      <div className="absolute -left-1 top-4 h-5 w-11 rotate-[-18deg] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
      <div className="absolute -left-1 top-7 h-5 w-9 rotate-[-18deg] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[560px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[4rem] bg-white shadow-2xl shadow-blue-200/70"
      >
        <div className="absolute inset-5 rounded-[3rem] bg-gradient-to-br from-blue-50 via-white to-violet-50" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2">
          <LogoMark />
          <div className="absolute left-14 top-2 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-300 to-amber-300 opacity-80 blur-2xl" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="absolute left-0 top-10 rounded-3xl border border-white bg-white/90 p-5 shadow-xl shadow-amber-100 backdrop-blur"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <RiskSignalIcon />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-950">Risk intelligence</p>
            <p className="text-xs text-slate-500">Verify + detect</p>
          </div>
        </div>
        <div className="flex h-20 items-end gap-2">
          <div className="h-8 w-5 rounded-t-lg bg-amber-200" />
          <div className="h-12 w-5 rounded-t-lg bg-amber-300" />
          <div className="h-16 w-5 rounded-t-lg bg-amber-400" />
          <div className="h-10 w-5 rounded-t-lg bg-amber-300" />
          <div className="h-20 w-5 rounded-t-lg bg-amber-500" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute right-0 top-24 rounded-3xl border border-white bg-white/90 p-5 shadow-xl shadow-violet-100 backdrop-blur"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
            <CubeIcon />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-950">Business trust</p>
            <p className="text-xs text-slate-500">Diagnostics + scoring</p>
          </div>
        </div>
        <div
          className="relative h-20 w-20 rounded-full"
          style={{ background: "conic-gradient(from 180deg, #2563eb 0deg, #22c55e 250deg, #e5e7eb 250deg)" }}
        >
          <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white text-xl font-black text-slate-950">84</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute bottom-8 left-16 right-16 rounded-3xl border border-white bg-white/90 p-5 shadow-xl shadow-fuchsia-100 backdrop-blur"
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-slate-950">Capability access</p>
            <p className="text-xs text-slate-500">Trainers + learners</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
            <SparkIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
        </div>
      </motion.div>

      <div className="absolute right-10 top-0 h-20 w-20 rounded-full bg-gradient-to-br from-orange-300 to-pink-300 opacity-70 blur-2xl" />
      <div className="absolute bottom-4 left-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 opacity-60 blur-2xl" />
    </div>
  );
}

function ProductCard({ product }) {
  const { name, label, description, Icon, href, accent, bg, text } = product;

  return (
    <div className="group overflow-hidden rounded-[2rem] border-0 bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200">
      <div className={`h-2 bg-gradient-to-r ${accent}`} />
      <div className="p-7">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg} ${text}`}>
            <Icon />
          </div>
          <span className={`rounded-full ${bg} px-3 py-1 text-xs font-semibold ${text}`}>{label}</span>
        </div>
        <h3 className="text-2xl font-black tracking-tight text-slate-950">{name}</h3>
        <p className="mt-3 min-h-16 text-base leading-7 text-slate-600">{description}</p>
        <a href={href} className={`mt-8 inline-flex items-center gap-2 text-sm font-bold ${text}`}>
          Explore {name}
          <ArrowRightIcon className="transition group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

function ScanQuestion({ title, options, value, onChange }) {
  return (
    <div>
      <h3 className="text-lg font-black text-slate-950">{title}</h3>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
              value === option
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function BusinessScanModal({ onClose }) {
  const [answers, setAnswers] = useState({
    organization: "",
    priority: "",
    challenge: "",
    outcome: "",
  });

  const productScores = useMemo(() => {
    const scores = {
      VerriLab: 0,
      Vorisc: 0,
      FleetMap: 0,
      Intelia: 0,
    };

    const values = Object.values(answers).join(" ").toLowerCase();

    if (
      values.includes("sme") ||
      values.includes("enterprise") ||
      values.includes("business trust") ||
      values.includes("internal controls") ||
      values.includes("governance") ||
      values.includes("funding") ||
      values.includes("readiness") ||
      values.includes("business structure")
    ) {
      scores.VerriLab += 6;
    }

    if (
      values.includes("risk") ||
      values.includes("supplier") ||
      values.includes("verification") ||
      values.includes("trade") ||
      values.includes("compliance") ||
      values.includes("institution")
    ) {
      scores.Vorisc += 6;
    }

    if (
      values.includes("logistics") ||
      values.includes("fleet") ||
      values.includes("delivery") ||
      values.includes("vehicle") ||
      values.includes("haulage") ||
      values.includes("operations")
    ) {
      scores.FleetMap += 6;
    }

    if (
      values.includes("training") ||
      values.includes("skills") ||
      values.includes("capability") ||
      values.includes("learning") ||
      values.includes("staff capability")
    ) {
      scores.Intelia += 6;
    }

    return scores;
  }, [answers]);

  const recommendation = Object.entries(productScores).sort((a, b) => b[1] - a[1])[0][0];

  const productLinks = {
    VerriLab: "https://verilab.fulscann.com/login?mode=create",
    Vorisc: "https://vorisc.fulscann.com",
    FleetMap: "https://fleetmap.fulscann.com",
    Intelia: "https://intelia.fulscann.com",
  };

  const productDescriptions = {
    VerriLab: "Best for business trust, SME diagnostics, internal controls, readiness scoring, and institutional confidence.",
    Vorisc: "Best for risk intelligence, supplier verification, trade confidence, compliance signals, and decision-support intelligence.",
    FleetMap: "Best for logistics visibility, fleet operations, driver management, haulage workflows, and fuel accountability.",
    Intelia: "Best for capability transfer, training access, learner support, and practical skills infrastructure.",
  };

  function updateAnswer(field, value) {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  }

  const completed = Object.values(answers).every(Boolean);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-slate-200 p-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">
              Fulscann Business Scan
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">
              Scan your business
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Answer a few quick questions and Fulscann will identify the solution that best fits your current priority.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 px-4 py-2 font-black text-slate-600 hover:bg-slate-50"
            aria-label="Close business scan"
          >
            ×
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto p-6">
          <div className="grid gap-6">
            <ScanQuestion
              title="Tell us about your organization."
              value={answers.organization}
              options={[
                "SME",
                "Enterprise",
                "Logistics company",
                "Manufacturer",
                "Financial institution",
                "Mining company",
                "Training provider",
              ]}
              onChange={(value) => updateAnswer("organization", value)}
            />

            <ScanQuestion
              title="What are you trying to improve first?"
              value={answers.priority}
              options={[
                "Business trust",
                "Internal controls",
                "Fleet operations",
                "Supplier verification",
                "Trade risk",
                "Capability transfer",
                "Funding readiness",
              ]}
              onChange={(value) => updateAnswer("priority", value)}
            />

            <ScanQuestion
              title="Where do you currently have the least visibility?"
              value={answers.challenge}
              options={[
                "Risk signals",
                "Business structure",
                "Vehicle and delivery activity",
                "Supplier confidence",
                "Staff capability",
                "Compliance readiness",
              ]}
              onChange={(value) => updateAnswer("challenge", value)}
            />

            <ScanQuestion
              title="What outcome matters most right now?"
              value={answers.outcome}
              options={[
                "Build trust",
                "Reduce risk",
                "Monitor operations",
                "Verify suppliers",
                "Prepare for funding",
                "Improve capability",
              ]}
              onChange={(value) => updateAnswer("outcome", value)}
            />
          </div>

          {completed && (
            <div className="mt-8 rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Recommended starting point
              </p>

              <h3 className="mt-3 text-4xl font-black">{recommendation}</h3>

              <p className="mt-3 text-slate-300">
                {productDescriptions[recommendation]}
              </p>

              <a
                href={productLinks[recommendation]}
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 font-bold text-slate-950 hover:bg-slate-100"
              >
                Launch {recommendation}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FulscannInterface() {
  const [scanOpen, setScanOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbfcff] text-slate-950" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" }}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="absolute left-[-12rem] top-40 h-[28rem] w-[28rem] rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute bottom-[-16rem] right-1/4 h-[30rem] w-[30rem] rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <header className="relative z-50 px-5 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-3" aria-label="Fulscann home">
            <LogoMark />
            <span className="text-xl font-black tracking-tight">Fulscann</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex" aria-label="Primary navigation">
            <a href="#ecosystem" className="transition hover:text-slate-950">Ecosystem</a>
            <a href="#method" className="transition hover:text-slate-950">Method</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>

          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-bold text-white transition hover:bg-slate-800">
            Start
          </a>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="px-5 pb-20 pt-12 md:pb-28 md:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                An intelligent system for readness, growth and trust 
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 md:text-7xl lg:text-8xl">
                Trusted by African SMEs Ready for Global Scale.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                A business intelligence infrastructure that exposes operational risk gaps, scores growth potentials and rank organizational trust for verified African SMEs seeking credible access to institutional opportunities.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setScanOpen(true)}
                  className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-7 text-base font-bold text-white shadow-xl shadow-blue-200 transition hover:opacity-95"
                >
                  Scan your business
                </button>

                <a href="#method" className="inline-flex h-14 items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-base font-bold text-slate-950 transition hover:bg-slate-50">
                  Explore deliverables
                </a>
              </div>
            </motion.div>

            <HeroIllustration />
          </div>
        </section>

        <section id="ecosystem" className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">Core platforms</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">Built around measurable outcomes.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Fulscann turns fragmented business activity into structured intelligence, giving businesses, and institutions the clarity to assess operational gaps, manage compliance risk, and act with connected evidence.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="px-5 py-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 md:p-12">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Fulscann operating layer</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">From raw activity to decision confidence.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">Fulscann is a predictive platform that converts weak, scattered, or informal data into usable signals for readiness, risk, trust, and growth.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((item, index) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-950">
                      <CheckIcon />
                    </div>
                    <p className="text-sm text-slate-400">0{index + 1}</p>
                    <h3 className="mt-1 text-2xl font-black">{item}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 text-sm font-bold text-white/90">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-20">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-500 p-10 text-center text-white shadow-2xl shadow-violet-200 md:p-16">
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Build your ecosystem under Fulscann.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">A clean parent identity for business verification, trust intelligence, risk profiling, and growth readiness across African enterprises.</p>
            <a href="mailto:partners@fulscann.com" className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-slate-950 transition hover:bg-slate-100">
              Start a conversation
            </a>
          </div>
        </section>
      </main>

      {scanOpen && <BusinessScanModal onClose={() => setScanOpen(false)} />}
    </div>
  );
}