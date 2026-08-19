// src/pages/PaymentInstructions.tsx
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import {
  ArrowRight,
  ArrowLeft,
  IndianRupee,
  Landmark,
  Smartphone,
  Globe,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type Method = "bank" | "upi" | "international";

export default function PaymentInstructions() {
  const isClerkEnabled = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const { getToken } = isClerkEnabled ? useAuth() : { getToken: async () => null };
  const navigate = useNavigate();
  const [registration, setRegistration] = useState<any>(null);
  const [method, setMethod] = useState<Method>("bank");

  useEffect(() => {
    (async () => {
      const token = await getToken();
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/registrations/me`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRegistration(await res.json());
    })();
  }, []);

  if (!registration) return null;

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white px-4 sm:px-6 lg:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        
        <div className="bg-black/60 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">
                Complete your payment
              </h1>
              <p className="text-sm text-white/60 mt-1">
                Secure checkout · Manual verification
              </p>
            </div>

            <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
              Step 2 of 3
            </span>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT — Payment Methods */}
            <div className="lg:col-span-2 space-y-8">
              {/* Amount */}
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
                <IndianRupee className="w-7 h-7 text-accent" />
                <div>
                  <p className="text-sm text-white/60">
                    Amount payable
                  </p>
                  <p className="text-3xl font-semibold text-accent">
                    ₹ {registration.amount}
                  </p>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <h2 className="text-lg font-medium mb-4">
                  Select a payment method
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Bank */}
                  <button
                    onClick={() => setMethod("bank")}
                    className={`p-5 rounded-2xl border text-left transition ${
                      method === "bank"
                        ? "border-accent bg-accent/10"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <Landmark className="w-5 h-5 text-accent mb-3" />
                    <p className="font-medium">Bank Transfer</p>
                    <p className="text-xs text-white/60 mt-1">
                      NEFT / IMPS / RTGS
                    </p>
                  </button>

                  {/* UPI */}
                  <button
                    onClick={() => setMethod("upi")}
                    className={`p-5 rounded-2xl border text-left transition ${
                      method === "upi"
                        ? "border-accent bg-accent/10"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-accent mb-3" />
                    <p className="font-medium">UPI Payment</p>
                    <p className="text-xs text-white/60 mt-1">
                      Google Pay, PhonePe
                    </p>
                  </button>

                  {/* International */}
                  <div className="p-5 rounded-2xl border border-white/10 bg-white/5 opacity-40 cursor-not-allowed">
                    <Globe className="w-5 h-5 mb-3" />
                    <p className="font-medium">International</p>
                    <p className="text-xs mt-1">
                      Not available
                    </p>
                  </div>
                </div>
              </div>

              {/* Method Details */}
              {method !== "international" && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 text-sm">
                  <p className="font-medium flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-accent" />
                    Transfer Details
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p className="text-white/60">Account Name</p>
                    <p>DEPT OF CSE, SRM UNIVERSITY</p>

                    <p className="text-white/60">Account Number</p>
                    <p>500101011067710</p>

                    <p className="text-white/60">IFSC Code</p>
                    <p>CIUB0000117</p>

                    <p className="text-white/60">Bank</p>
                    <p>City Union Bank</p>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT — Reference + CTA */}
            <div className="flex flex-col justify-between space-y-10">
              {/* Reference */}
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
                <p className="font-medium text-accent mb-2">
                  Payment Reference
                </p>
                <p className="font-mono text-white/80 break-all">
                  CONFERENCE2026_{registration.userId}
                </p>
                <p className="text-xs text-white/60 mt-3">
                  Mandatory. Add this reference in the payment remarks.
                </p>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <button
                  onClick={() => navigate("/upload-proof")}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-black px-6 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition"
                >
                  I’ve completed the payment
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-start gap-2 text-xs text-white/50">
                  <ShieldCheck className="w-4 h-4 text-accent mt-0.5" />
                  <p>
                    Payments are securely verified by the Conference
                    organizing committee before confirmation.
                  </p>
                </div>

                <div className="flex items-start gap-2 text-xs text-white/50">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                  <p>
                    Confirmation will be visible on your dashboard
                    once approved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
