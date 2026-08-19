// nctaids-main/src/pages/Register.tsx
import { useUser, useAuth } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const isClerkEnabled = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const { user } = isClerkEnabled ? useUser() : { user: null };
  const { getToken } = isClerkEnabled ? useAuth() : { getToken: async () => null };
  const navigate = useNavigate();

  const [form, setForm] = useState({
    role: "student",
    title: "",
    domain: "",
    mode: "hybrid",
  });


  const fee =
    form.role === "student" ? 1500 : form.role === "faculty" ? 2000 : 3000;

  const handleContinueToPayment = async () => {
    try {
      const token = await getToken();

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/registrations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            role: form.role,
            paperTitle: form.title,
            domain: form.domain,
            mode: form.mode,
          }),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "Registration failed");
        return;
      }

      navigate("/payment-instructions");
    } catch (error) {
      console.error(error);
      alert("Failed to save registration. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen text-white py-28 px-6 bg-[#0b0d12] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-emerald-500/10 blur-[160px]" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-[180px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto"
      >
      
        <button
          onClick={() => navigate("/")}
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Conference Registration
          </h1>
          <p className="mt-3 text-white/55 text-sm tracking-wide">
            Tamil-Welsh Conference 2026 · SRM Institute of Science & Technology
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-12">
            {/* User info */}
            <div className="flex items-center gap-4 border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur">
              <CheckCircle className="w-6 h-6 text-accent" />
              <div>
                <p className="font-medium text-lg">{user?.fullName}</p>
                <p className="text-sm text-white/60">
                  {user?.emailAddresses[0].emailAddress}
                </p>
              </div>
            </div>

            {/* Role */}
            <section>
              <h2 className="text-lg font-medium mb-4">
                Registration Category
              </h2>
              <select
                value={form.role}
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value })
                }
                className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
              >
                <option value="student">Student / Research Scholar</option>
                <option value="faculty">Faculty</option>
                <option value="industry">Industry Delegate</option>
              </select>
            </section>

            {/* Paper details */}
            <section className="space-y-6">
                <h2 className="text-lg font-medium">
                  Paper Information
                </h2>

                <input
                  placeholder="Paper Title"
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                />

                <input
                  placeholder="Research Domain (AI, Sustainability, IoT)"
                  value={form.domain}
                  onChange={(e) =>
                    setForm({ ...form, domain: e.target.value })
                  }
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
                />
              </section>

            {/* Mode */}
            <section>
              <h2 className="text-lg font-medium mb-4">
                Participation Mode
              </h2>
              <div className="flex gap-5">
                {["hybrid", "offline"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setForm({ ...form, mode })}
                    className={`flex-1 rounded-xl px-5 py-4 border transition ${
                      form.mode === mode
                        ? "bg-accent/90 text-black border-accent"
                        : "border-white/15 text-white/60 hover:border-white/25"
                    }`}
                  >
                    <p className="font-medium">
                      {mode === "hybrid"
                        ? "Hybrid Mode"
                        : "Offline Mode"}
                    </p>
                    <p className="text-xs mt-1 opacity-70">
                      {mode === "hybrid"
                        ? "Online + on-campus access"
                        : "Physical presence at SRM IST"}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT — SUMMARY */}
          <div className="sticky top-32 h-fit">
            <div className="border border-white/10 rounded-3xl p-7 bg-black/55 backdrop-blur space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  Registration Summary
                </p>
                <p className="text-lg font-medium mt-1">
                  Tamil-Welsh Conference 2026
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Category</span>
                  <span className="capitalize">{form.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Mode</span>
                  <span className="capitalize">{form.mode}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-sm text-white/60 mb-1">
                  Total Payable
                </p>
                <p className="text-3xl font-semibold text-accent">
                  ₹ {fee}
                </p>
                <p className="text-xs text-white/45 mt-2">
                  Registration will be confirmed after payment
                  verification by the organizing committee.
                </p>
              </div>

              <button
                onClick={handleContinueToPayment}
                className="w-full btn-accent py-4 text-lg flex items-center justify-center gap-2"
              >
                Continue to Payment
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-white/40 text-center">
                Payment via bank transfer · Manual verification
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
