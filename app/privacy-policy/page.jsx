import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata = {
  title: "Privacy Policy | Galactic 3D",
  description:
    "Learn how Galactic 3D collects, uses, stores, and protects your personal information and uploaded design files.",
  keywords: [
    "Galactic 3D Privacy Policy",
    "CAD File Confidentiality",
    "Additive Manufacturing Data Security",
    "3D Printing NDA",
    "ISO 9001 Data Protection",
  ],
  openGraph: {
    title: "Privacy Policy | Galactic 3D",
    description:
      "Learn how Galactic 3D collects, uses, stores, and protects your personal information and uploaded design files.",
    url: "https://www.galactic-3d.com/privacy-policy",
    siteName: "Galactic 3D",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
