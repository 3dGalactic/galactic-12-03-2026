"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import styles from "../team.module.css";
import MEMBERS from "../members";

export default function ProfilePage() {
  const params = useParams();
  const memberId = parseInt(params.id);
  const member = MEMBERS.find(m => m.id === memberId);

  if (!member) {
    return (
      <div style={{ padding: "60px 80px", background: "#2f1212", minHeight: "100vh", color: "white" }}>
        <p>Member not found</p>
        <Link href="/team" style={{ color: "#ef4444" }}>← Back to Team</Link>
      </div>
    );
  }

  return (
    <div style={{ padding:"50px", background: "#2f1212", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 80px", color: "white" }}>

        {/* TWO COLUMN LAYOUT: IMAGE ON LEFT, CONTENT ON RIGHT (equal-height) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "stretch", minHeight: "520px" }}>
          {/* LEFT: FULL IMAGE */}
          <div style={{ position: "relative", height: "100%", borderRadius: "20px", overflow: "hidden" }}>
            <Image
              src={member.img}
              alt={member.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* RIGHT: NAME, ROLE, DESCRIPTION */}
          <div style={{ height: "100%", overflowY: "auto", padding: "20px 10px" }}>
            {/* NAME - HEADING */}
            <h1 style={{ fontSize: "42px", fontWeight: "700", margin: "0 0 8px 0", color: "#fff" }}>
              {member.name}
            </h1>

            {/* ROLE - SUBHEADING */}
            <p style={{ fontSize: "18px", color: "#ef4444", margin: "0 0 20px 0", fontWeight: "600", whiteSpace: "pre-line" }}>
              {member.role}
            </p>

            {/* DESCRIPTION (summarised) */}
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#d1d5db" }}>
              {member.bio}
            </p>
          </div>
        </div>

        {/* BACK LINK BELOW CONTENT */}
        <div style={{ marginTop: "28px", textAlign: "left" }}>
          <Link
            href="/team"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#ef4444",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              transition: "opacity 0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            <ArrowLeft size={20} /> Back to Team
          </Link>
        </div>
      </div>
    </div>
  );
}
