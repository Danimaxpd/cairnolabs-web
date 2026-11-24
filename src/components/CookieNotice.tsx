"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { getCookie, NOTICE_COOKIE_NAME, setFunctionalCookie } from "@/lib/cookies";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isPrivacyPage = pathname === "/privacy" || pathname === "/privacy/";

  useEffect(() => {
    const acknowledged = getCookie(NOTICE_COOKIE_NAME);
    if (acknowledged !== "1") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleDismiss = () => {
    setFunctionalCookie(NOTICE_COOKIE_NAME, "1");
    setVisible(false);
  };

  return (
    <aside role="region" aria-label="Cookie notice" className="cairno-cookie-banner">
      <div className="cairno-cookie-header cairno-mono">
        <ShieldCheck size={15} style={{ flexShrink: 0 }} aria-hidden="true" />
        <span>Functional Cookies Only · Zero Tracking</span>
      </div>

      <p className="cairno-cookie-body">
        We store two strictly functional first-party cookies:{" "}
        <code className="cairno-mono cairno-cookie-code">cairno_theme</code> for your light or
        dark appearance preference, and{" "}
        <code className="cairno-mono cairno-cookie-code">cairno_notice_ack</code> to remember
        dismissing this banner. No analytics, no ad pixels, and no third-party tracking.
      </p>

      <div
        className={
          isPrivacyPage
            ? "cairno-cookie-actions cairno-cookie-actions--end"
            : "cairno-cookie-actions"
        }
      >
        {!isPrivacyPage && (
          <Link href="/privacy/" className="cairno-inline-link" style={{ fontSize: "12px" }}>
            Privacy Policy
          </Link>
        )}
        <button type="button" onClick={handleDismiss} className="cairno-cookie-btn">
          Got it
        </button>
      </div>
    </aside>
  );
}
