import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { ArrowLeft, User, Stethoscope, Building2, Phone, Shield, Sparkles, CheckCircle2, QrCode } from "lucide-react";
import type { User as UserType } from "../App";
import { ThemeToggle } from "./ThemeToggle";

interface LoginWithOTPProps {
  onLogin: (user: UserType) => void;
  onBack: () => void;
  onRegister: (role: "patient" | "doctor" | "clinic") => void;
}

export function LoginWithOTP({ onLogin, onBack, onRegister }: LoginWithOTPProps) {
  const [step, setStep] = useState<"role" | "mobile" | "otp">("role");
  const [selectedRole, setSelectedRole] = useState<"patient" | "doctor" | "clinic">("patient");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");

  const roles = [
    {
      value: "patient" as const,
      label: "Patient",
      icon: User,
      description: "Access consultations and health records"
    },
    {
      value: "doctor" as const,
      label: "Doctor",
      icon: Stethoscope,
      description: "Manage patients and appointments"
    },
    {
      value: "clinic" as const,
      label: "Clinic / Admin",
      icon: Building2,
      description: "Oversee operations and staff"
    }
  ];

  const handleSendOTP = () => {
    if (mobileNumber.length === 10) {
      // Mock OTP send
      setStep("otp");
      // In real app, send OTP via SMS
      alert(`OTP sent to ${mobileNumber}: 123456 (Demo)`);
    }
  };

  const handleVerifyOTP = () => {
    // Mock OTP verification - in real app, verify with backend
    if (otp === "123456" || otp.length === 6) {
      const mockUser: UserType = {
        id: Math.random().toString(36).substr(2, 9),
        name: "Demo User",
        email: `${mobileNumber}@demo.com`,
        role: selectedRole,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
      };
      onLogin(mockUser);
    } else {
      alert("Invalid OTP. Demo OTP is: 123456");
    }
  };

  const handleRoleSelect = (role: "patient" | "doctor" | "clinic") => {
    setSelectedRole(role);
    setStep("mobile");
  };

  return (
    <div className="min-h-screen bg-pink-50 dark:bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-100 dark:bg-pink-900/20 rounded-full blur-3xl opacity-60 -ml-20 -mt-20"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-60 -mr-20 -mb-20"></div>

      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md relative z-10 animate-fade-in-up">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 hover:bg-pink-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 group rounded-full px-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>

        <Card className="p-8 bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 shadow-2xl relative overflow-hidden rounded-3xl">
          {/* Card decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-2xl"></div>

          <div className="flex items-center justify-center mb-8 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-tr from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-200 dark:shadow-pink-900/40 relative overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              <Sparkles className="w-8 h-8 text-white relative z-10" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-2">Welcome Back</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              {step === "role" && "Choose your account type"}
              {step === "mobile" && "Enter your mobile number to login"}
              {step === "otp" && "Verify your identity"}
            </p>
          </div>

          {/* Step 1: Role Selection */}
          {step === "role" && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid gap-4">
                {roles.map((role) => (
                  <button
                    key={role.value}
                    onClick={() => handleRoleSelect(role.value)}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 hover:border-pink-500 dark:hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/10 transition-all duration-300 text-left flex items-center gap-4 group relative overflow-hidden"
                  >
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100 dark:border-slate-800 group-hover:border-pink-200 dark:group-hover:border-pink-800 transition-colors">
                      <role.icon className="w-6 h-6 text-slate-400 group-hover:text-pink-500 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{role.label}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{role.description}</p>
                    </div>
                    <div className="absolute right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowLeft className="w-5 h-5 text-pink-500 rotate-180" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Mobile Number */}
          {step === "mobile" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/10 rounded-xl border border-pink-100 dark:border-pink-900/20">
                <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  {selectedRole === "patient" && <User className="w-5 h-5 text-pink-600 dark:text-pink-400" />}
                  {selectedRole === "doctor" && <Stethoscope className="w-5 h-5 text-pink-600 dark:text-pink-400" />}
                  {selectedRole === "clinic" && <Building2 className="w-5 h-5 text-pink-600 dark:text-pink-400" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Login as {roles.find(r => r.value === selectedRole)?.label}</p>
                  <button
                    onClick={() => setStep("role")}
                    className="text-xs text-pink-600 dark:text-pink-400 hover:underline font-bold"
                  >
                    Change role
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="mobile" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Mobile Number</Label>
                <div className="relative mt-2">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter 10-digit number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="pl-11 h-12 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:border-pink-500 dark:focus:border-pink-500 focus:ring-pink-500/20 rounded-xl font-medium text-lg"
                    maxLength={10}
                  />
                </div>
              </div>

              <Button
                onClick={handleSendOTP}
                className="w-full bg-slate-900 dark:bg-pink-600 hover:bg-slate-800 dark:hover:bg-pink-700 text-white font-bold h-12 rounded-xl shadow-lg shadow-slate-200 dark:shadow-pink-900/20 transition-all hover:scale-[1.02]"
                disabled={mobileNumber.length !== 10}
              >
                Get OTP
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-slate-900 text-slate-400 font-medium">or</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full h-12 rounded-xl border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold"
                onClick={() => onRegister(selectedRole)}
              >
                Create New Account
              </Button>
            </div>
          )}

          {/* Step 3: OTP Verification */}
          {step === "otp" && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-6">
                  We've sent a code to <span className="text-slate-900 dark:text-white font-bold ml-1">+91 {mobileNumber}</span>
                  <button
                    onClick={() => setStep("mobile")}
                    className="ml-2 text-pink-600 dark:text-pink-400 hover:underline text-xs font-bold"
                  >
                    Edit
                  </button>
                </p>

                <div className="relative mb-8">
                  <Input
                    id="otp"
                    type="text"
                    placeholder="0 0 0 0 0 0"
                    value={otp}
                    autoFocus
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    maxLength={6}
                    className="text-center text-3xl font-bold tracking-[0.5em] h-16 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:border-pink-500 focus:ring-pink-500/20 rounded-xl"
                  />
                </div>

                <p className="text-xs text-slate-400 mb-6 bg-slate-50 dark:bg-slate-950/50 py-2 rounded-lg inline-block px-4">
                  Demo Code: <strong className="text-slate-900 dark:text-white font-mono text-sm ml-2">123456</strong>
                </p>
              </div>

              <Button
                onClick={handleVerifyOTP}
                className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold h-12 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                disabled={otp.length !== 6}
              >
                Verify & Login
                <CheckCircle2 className="w-4 h-4 ml-2" />
              </Button>

              <div className="text-center">
                <button
                  onClick={handleSendOTP}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 font-bold transition-colors"
                >
                  Resend Code
                </button>
              </div>
            </div>
          )}
        </Card>

        <div className="text-center mt-8 flex items-center justify-center gap-2 opacity-60">
          <Shield className="w-4 h-4 text-slate-400 dark:text-slate-500" />
          <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
            Bank-grade security & encryption
          </p>
        </div>
      </div>
    </div>
  );
}
