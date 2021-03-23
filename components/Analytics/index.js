import React, { useEffect } from "react";
import { useRouter } from "next/router";

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const GTMEvent = function (data) {
  window && window.dataLayer && window.dataLayer.push(data);
};

const FBEvent = function (name) {
  const standardEvent = [
    "AddPaymentInfo",
    "AddToCart",
    "AddToWishlist",
    "CompleteRegistration",
    "Contact",
    "CustomizeProduct",
    "Donate",
    "FindLocation",
    "InitiateCheckout",
    "Lead",
    "PageView",
    "Purchase",
    "Schedule",
    "Search",
    "StartTrial",
    "SubmitApplication",
    "Subscribe",
    "ViewContent",
  ];
  if (window && window.fbq) {
    fbq(standardEvent.includes(name) ? "track" : "trackCustom", name);
  }
};

const SendEvent = function (event) {
  GTMEvent({ event: event });
  FBEvent(event);
};

const AnalyticsManager = function () {
  const router = useRouter();
  useEffect(() => {
    function onRouteChange(url) {
      GTMEvent({
        event: "pageview",
        page: url,
      });
    }

    router.events.on("routeChangeComplete", onRouteChange);
    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
    };
  }, []);
  return (
    <>
      {/* Facebook Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');
          `,
        }}
      />
      {/* End Facebook Pixel Code */}
      {/* Google Tag Manager */}
      <script
        async
        src={"https://www.googletagmanager.com/gtag/js?id=" + GTM_ID}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTM_ID}');
          `,
        }}
      />
      {/* End Google Tag Manager */}
      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      {/* End Google Tag Manager (noscript) */}
    </>
  );
};

const Analytics = () => <AnalyticsManager />;

export { Analytics, SendEvent, AnalyticsManager };

export default Analytics;
