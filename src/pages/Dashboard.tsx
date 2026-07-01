// nctaids-main/src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  Layers,
  TrendingUp,
  Calendar,
  Mail,
  Award,
  AlertCircle,
  BarChart3,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function Dashboard() {
  const isClerkEnabled = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const { user } = isClerkEnabled ? useUser() : { user: null };
  const { getToken } = isClerkEnabled ? useAuth() : { getToken: async () => null };

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistration = async () => {
      const token = await getToken();
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/registrations/me`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.ok) setData(await res.json());
      setLoading(false);
    };
    fetchRegistration();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0d12] text-white px-6 py-28 overflow-hidden">
     
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-accent/10 blur-[200px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto space-y-16"
      >
        <section className="rounded-[28px] p-10 bg-white/5 border border-white/10 backdrop-blur">
          <h1 className="text-4xl font-semibold tracking-tight">
            Welcome back, {user?.firstName}
          </h1>
          <p className="text-white/60 mt-2">
            NCTAIDS 2026 · Your Personal Conference Command Center
          </p>

          {data && (
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Metric title="Registration" value="Completed" icon={<ShieldCheck />} success />
              <Metric title="Payment" value={data.paymentStatus} icon={<CreditCard />} success={data.paymentStatus === "paid"} />
              <Metric title="Participation" value={data.mode} icon={<Users />} />
              <Metric title="Amount" value={`₹ ${data.amount}`} icon={<BarChart3 />} />
            </div>
          )}
        </section>

        {loading && <p className="text-white/50">Loading dashboard…</p>}
        {!loading && !data && (
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            No registration found.
          </div>
        )}

        {data && (
          <>
            <section>
              <h2 className="text-xl font-medium mb-6">Your NCTAIDS Journey</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <JourneyStep done icon={<FileText />} title="Registered" />
                <JourneyStep done={data.paymentStatus === "paid"} icon={<CreditCard />} title="Payment" />
                <JourneyStep icon={<Layers />} title="Paper Review" />
                <JourneyStep icon={<Calendar />} title="Conference Day" />
              </div>
            </section>

            <section className="grid lg:grid-cols-3 gap-10">
              <GlassCard title="Registration Overview" icon={<Layers />}>
                <Info label="Role" value={data.role} />
                <Info label="Mode" value={data.mode} />
                {data.paperTitle && <Info label="Paper Title" value={data.paperTitle} />}
                {data.domain && <Info label="Domain" value={data.domain} />}
                <Info label="Registered On" value={new Date(data.createdAt).toDateString()} />
              </GlassCard>

              <GlassCard title="Payment Status" icon={<CreditCard />}>
                <StatusBadge paid={data.paymentStatus === "paid"} />
                <p className="text-3xl font-semibold mt-4">₹ {data.amount}</p>

                {data.paymentStatus !== "paid" && (
                  <a
                    href="/payment"
                    className="mt-5 inline-flex justify-center px-6 py-3 rounded-xl bg-accent text-black font-semibold hover:opacity-90 transition"
                  >
                    Complete Payment
                  </a>
                )}
              </GlassCard>

              <GlassCard title="Communication" icon={<Mail />}>
                <p className="text-sm text-white/70">
                  Official updates will be sent to:
                </p>
                <p className="mt-3 font-medium">
                  {user?.emailAddresses[0].emailAddress}
                </p>
              </GlassCard>
            </section>

            <section className="grid md:grid-cols-2 gap-10">
              <GlassCard title="What Happens Next?" icon={<TrendingUp />}>
                <ul className="space-y-3 text-sm text-white/70">
                  <li>• Paper review notification</li>
                  <li>• Track & session allocation</li>
                  <li>• Conference schedule access</li>
                  <li>• Workshop enrollment</li>
                </ul>
              </GlassCard>

              <GlassCard title="Your Benefits" icon={<Award />}>
                <ul className="space-y-3 text-sm text-white/70">
                  <li>• Digital participation certificate</li>
                  <li>• Indexed proceedings access</li>
                  <li>• Session recordings</li>
                  <li>• Research networking</li>
                </ul>
              </GlassCard>
            </section>

            <section className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <AlertCircle className="text-accent w-6 h-6" />
              <p className="text-sm text-white/70">
                Please complete payment before the deadline to avoid automatic cancellation.
              </p>
            </section>
          </>
        )}
      </motion.div>
    </div>
  );
}


function Metric({ title, value, icon, success }: any) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
      <div className={`w-9 h-9 ${success ? "text-green-400" : "text-accent"}`}>
        {icon}
      </div>
      <p className="text-sm text-white/50">{title}</p>
      <p className="text-lg font-semibold capitalize">{value}</p>
    </div>
  );
}

function JourneyStep({ title, icon, done }: any) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          done ? "bg-green-500/20 text-green-400" : "bg-white/10 text-white/60"
        }`}
      >
        {icon}
      </div>
      <p className="font-medium">{title}</p>
      <p className="text-xs text-white/50">
        {done ? "Completed" : "Upcoming"}
      </p>
    </div>
  );
}

function GlassCard({ title, icon, children }: any) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
      <h3 className="flex items-center gap-2 text-lg font-medium">
        <span className="text-accent">{icon}</span>
        {title}
      </h3>
      {children}
    </div>
  );
}

function Info({ label, value }: any) {
  return (
    <p className="text-sm text-white/70">
      <span className="text-white">{label}:</span> {value}
    </p>
  );
}

function StatusBadge({ paid }: any) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
        paid
          ? "bg-green-500/15 text-green-400"
          : "bg-yellow-500/15 text-yellow-400"
      }`}
    >
      {paid ? <CheckCircle /> : <Clock />}
      {paid ? "Payment Completed" : "Payment Pending"}
    </div>
  );
}
