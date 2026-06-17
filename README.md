# 🏥 Autellia E-Clinic — Healthcare Management Platform

A comprehensive, enterprise-grade clinic management platform built for doctors, admins, and staff to manage an entire clinic from a single dashboard.

🔗 **Live Demo:** [autellia-e-clinic.vercel.app](https://autellia-e-clinic.vercel.app)

## Overview

Autellia E-Clinic is a full-featured frontend dashboard built in React + TypeScript + Tailwind CSS. It covers the complete workflow of a clinic — appointments, patients, pharmacy, billing, lab, and more — designed for a super-admin to manage everything from one place.

## ✨ Key Features

- **Dashboard** — KPI cards, patient queue, revenue charts
- **Doctor Management** — Add/edit doctors, assign specializations, set schedules
- **Patient Management** — Register patients, ABHA ID integration, insurance tracking
- **Appointment Management** — Calendar views (day/week/month), token queue system
- **Billing & Payments** — GST-ready invoices, multiple payment modes, PDF download
- **Pharmacy & Inventory** — Stock tracking, expiry alerts, purchase/sales reports
- **Lab Tests** — Create orders, upload results, track status
- **Reports & Analytics** — Revenue trends, patient flow, doctor performance (Recharts)
- **Staff & RBAC** — Role-Based Access: Admin, Doctor, Nurse, Receptionist
- **AI Features** — 13 AI modules: Appointment Assistant, Symptom Checker, Prescription Generator, Voice-to-Text notes

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React + TypeScript |
| Styling | Tailwind CSS v4 |
| UI | Shadcn/UI components |
| Charts | Recharts |
| Icons | Lucide React |
| Build | Vite |
| Hosting | Vercel |

## 📁 Project Structure

```
Autellia-E-CLINIC/
├── components/
│   ├── ClinicDashboard.tsx          # Main dashboard + clinic profile
│   ├── ClinicDashboardTabs.tsx      # Doctor & Patient management
│   ├── ClinicDashboardModules.tsx   # Billing, Pharmacy, Lab, Analytics
│   └── ClinicDashboardComplete.tsx  # Calendar, IoT, Messaging, Settings
├── contexts/                        # React context providers
├── App.tsx                          # Root component + routing
└── index.html
```

## ⚙️ Local Setup

```bash
git clone https://github.com/Aditya0105singh/Autellia-E-CLINIC.git
cd Autellia-E-CLINIC
npm install
npm run dev
```

App runs at **http://localhost:5173** — no environment variables needed (demo data is mocked).

## 👤 Author

**Aditya Singh** — [@Aditya0105singh](https://github.com/Aditya0105singh)
