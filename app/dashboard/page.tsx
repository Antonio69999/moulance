import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default function Dashboard() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1 bg-white border border-red-200 rounded-xl p-6 animate-fade-in"></div>

        <div className="flex-1 bg-white border border-red-200 rounded-xl p-6 animate-fade-in"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Card */}
        <div
          className="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        ></div>
        {/* Second card */}
        <div
          className="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        ></div>
        {/* Third card */}
        <div
          className="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>
    </main>
  );
}
