import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";

export const metadata = {
  title: "SiraHub - Turn Your Skills Into Opportunities | Ethiopia",
  description:
    "Ethiopian student skill-to-opportunity platform. Don't just say you have a skill. Show what you can build. Connect with internships, junior jobs, and verified engineering challenges at Mekelle University, Addis Ababa University, and across Ethiopia.",
  keywords: [
    "SiraHub",
    "Ethiopian Tech Jobs",
    "Ethiopia Internships",
    "Student Portfolio Ethiopia",
    "Mekelle University",
    "Addis Ababa University",
    "Safaricom Ethiopia Jobs",
    "Ethio Telecom Internships",
    "Gebeya",
    "ArifPay"
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#059669"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <div className="flex-1 flex flex-col pb-16 md:pb-0">
          {children}
        </div>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
