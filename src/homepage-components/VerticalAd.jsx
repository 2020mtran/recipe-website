import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const VerticalAd = ({ adSlot }) => {
  const location = useLocation();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, [location.pathname]);

  return (
    <div className="my-8 px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg text-center">
      <p className="text-xs text-gray-500 mb-2">Advertisement</p>
      <ins
        key={location.pathname} // force new element on route change
        className="adsbygoogle w-full"
        style={{ display: "inline-block", width: "160px", height: "600px" }}
        data-ad-client="ca-pub-3940256099942544" // Replace with real client ID in production
        data-ad-slot={adSlot}
        data-ad-format="vertical"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default VerticalAd;
