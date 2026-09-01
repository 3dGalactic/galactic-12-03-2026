"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Award } from "lucide-react";
import { useParams } from "next/navigation";
import MEMBERS from "../members";

export default function ProfilePage() {
  const params = useParams();
  const memberId = parseInt(params.id);
  const member = MEMBERS.find(m => m.id === memberId);

  if (!member) {
    return (
      <div className="min-h-screen bg-white text-[#111111] py-20 px-6 font-sans">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-extrabold text-[#111111]">Team Member Not Found</h1>
          <p className="text-sm text-gray-600">The requested team profile could not be located.</p>
          <Link href="/team" className="inline-flex items-center gap-2 text-xs font-bold text-[#D32F2F] hover:underline">
            <ArrowLeft size={16} /> Back to Galactic Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* BACK TO TEAM LINK */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-600 hover:text-[#D32F2F] mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* TEAM MEMBER DETAIL CARD */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-xl grid md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: PHOTO */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md">
              {member.img ? (
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-extrabold text-5xl select-none">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-2">
                {member.role}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                {member.name}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              {member.bio}
            </p>

            {member.achievements && member.achievements.length > 0 && (
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#D32F2F] flex items-center gap-1.5">
                  <Award size={16} /> Key Achievements &amp; Focus
                </h3>
                <ul className="space-y-2">
                  {member.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                      <CheckCircle2 size={14} className="text-[#D32F2F] shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-corporate-primary">
                Contact Team Specialist &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
