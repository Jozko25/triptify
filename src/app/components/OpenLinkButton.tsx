import React from 'react';

const OpenLinkButton: React.FC = () => {
  const openLinkGoogle = () => {
    window.open('https://www.google.com/maps/dir/Los+Angeles,+Kalifornia,+Spojen%C3%A9+%C5%A1t%C3%A1ty+americk%C3%A9/San+Francisco,+Kalifornia,+Spojen%C3%A9+%C5%A1t%C3%A1ty+americk%C3%A9/@35.8349865,-125.6051806,6z/am=t/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!2m2!1d-118.242643!2d34.0549076!1m5!1m1!1s0x80859a6d00690021:0x4a501367f076adff!2m2!1d-122.4194155!2d37.7749295!3e0?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };
  const openLinkWaze = () => {
    window.open('https://www.waze.com/en/live-map/directions/san-francisco-ca-us?to=place.ChIJIQBpAG2ahYAR_6128GcTUEo&from=ll.33.98450607%2C-118.16911697');
  };

  return (
    <div className="text-center">
  <div className="inline-flex space-x-4">
    <button onClick={openLinkGoogle} className="hover:text-green-500 bg-zinc-200 transition rounded-md text-2xl">
      Google Maps
    </button>

    <button onClick={openLinkWaze} className="hover:text-blue-500 bg-zinc-200 transition rounded-md text-2xl">
      Waze
    </button>
  </div>
</div>

  );
};


export default OpenLinkButton;
