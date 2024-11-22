import React from "react";

const GoogleMaps = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.1326566424623!2d17.892470193570723!3d50.66216619896289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710538ba6e9ea87%3A0xf140850aa2ecff86!2sSearch%20IT!5e1!3m2!1spl!2spl!4v1723646595080!5m2!1spl!2spl"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
