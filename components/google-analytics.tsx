"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-FN01ZESQ91";

export function GoogleAnalytics() {
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }

    // Watch for consent changes (when user clicks accept)
    const observer = new MutationObserver(() => {
      if (localStorage.getItem("cookie-consent") === "accepted") {
        window.gtag?.("consent", "update", {
          analytics_storage: "granted",
        });
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Also poll for same-tab localStorage changes
    const interval = setInterval(() => {
      if (localStorage.getItem("cookie-consent") === "accepted") {
        window.gtag?.("consent", "update", {
          analytics_storage: "granted",
        });
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Default consent: denied until user accepts */}
      <Script id="gtag-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
          });
        `}
      </Script>

      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

// Extend Window for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
