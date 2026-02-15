"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-FN01ZESQ91";

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      setHasConsent(consent === "accepted");
    };

    checkConsent();

    // Re-check when storage changes (e.g. user accepts cookies)
    const handleStorage = () => checkConsent();
    window.addEventListener("storage", handleStorage);

    // Also poll briefly for same-tab consent changes
    const interval = setInterval(checkConsent, 2000);
    const timeout = setTimeout(() => clearInterval(interval), 30000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}
