import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase";

export interface Role {
  id: string;
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  tech: string[];
  order: number;
}

// Shown while Firebase loads or if not yet configured
const FALLBACK_ROLES: Role[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Manoa Now",
    period: "August 2025 – Present",
    type: "Part-time",
    description:
      "Full stack engineer building scalable Firebase-backed React/Next.js components supporting 20,000+ users.",
    tech: ["TypeScript", "React", "Firebase", "Next.js"],
    order: 0,
  },
  {
    id: "2",
    title: "Consultant Intern",
    company: "Pacific Point",
    period: "January 2026 – Present",
    type: "Internship",
    description:
      "Salesforce solutions engineer consultant intern working alongside Project Managers, Business Analysts, and Support Team.",
    tech: ["Salesforce", "Agile Methodologies"],
    order: 1,
  },
  {
    id: "3",
    title: "IT Engineer Intern",
    company: "Pacific Shipyards International",
    period: "June 2025 – July 2025",
    type: "Internship",
    description:
      "Built an automated invoice processing system using Python and Box.com AI API — reducing manual processing by 50% across 10,000+ yearly invoices. Held Secret Clearance.",
    tech: ["Python", "Box AI API"],
    order: 2,
  },
];

export function useRoles(): { roles: Role[]; loading: boolean } {
  const [roles, setRoles] = useState<Role[]>(FALLBACK_ROLES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "roles"), orderBy("order"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Role[];
        // If Firestore is empty, keep showing fallback data
        setRoles(data.length > 0 ? data : FALLBACK_ROLES);
        setLoading(false);
      },
      () => {
        // On error (e.g. not configured yet), keep fallback data
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { roles, loading };
}
