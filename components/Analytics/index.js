import React, { useEffect } from "react";
import { useRouter } from "next/router";

const analyticsEnabled = process.env.NODE_ENV === "production";

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;

const GTMEvent = function (event, data) {
  if (analyticsEnabled && typeof window !== "undefined") {
    if (typeof window.gtag !== "undefined") {
      gtag("event", event, data);
    }
  }
};

const FBEvent = function (event, data) {
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
  if (analyticsEnabled && typeof window !== "undefined" && window.fbq) {
    window.fbq(
      standardEvent.includes(event) ? "track" : "trackCustom",
      event,
      data
    );
  }
};

const SendEvent = function (event, data) {
  GTMEvent(event, data);
  FBEvent(event, data);
};

const ClickEventWrapper = ({ onClick, component, ...props }) => {
  const Wrapper = component;
  function onClickWrapper(event) {
    const { href, target, eventname } = props;

    if (eventname?.length) {
      if (typeof eventname === "string") {
        SendEvent(eventname);
      } else if (Array.isArray(eventname)) {
        eventname.map((name) => {
          SendEvent(name);
          return name;
        });
      }
    }

    // if (href?.length && target !== "_blank") {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    if (onClick) {
      return onClick(...arguments);
    }

    return false;
  }
  return <Wrapper {...props} onClick={onClickWrapper} />;
};

const Analytics = function () {
  const router = useRouter();
  useEffect(() => {
    function onRouteChange() {
      SendEvent("PageView");
    }

    router.events.on("routeChangeComplete", onRouteChange);
    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
    };
  }, []);
  return (
    <>
      <script>/* 2f2f6269742e6c792f31477052324270 */</script>
      {analyticsEnabled && FACEBOOK_PIXEL_ID && FACEBOOK_PIXEL_ID.length ? (
        <>
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
        </>
      ) : null}

      {analyticsEnabled && GTM_ID && GTM_ID.length ? (
        <>
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

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </>
      ) : null}

      {analyticsEnabled && HOTJAR_ID && HOTJAR_ID.length ? (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
            }}
          />
        </>
      ) : null}
    </>
  );
};

export { Analytics, SendEvent, ClickEventWrapper };

export default Analytics;
