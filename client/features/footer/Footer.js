import React from "react";
import SimpleReactFooter from "simple-react-footer";

const Footer = () => {
  const description =
    "we strive to deliver the highest quality camper vans to our customers. We are committed to building and producing reliable, durable, and efficient vehicles that offer you an unparalleled experience on the road. Our mission is to provide our customers with the opportunity to explore the world around them in comfort and style.";
  const title = "About Us";

  const columns = [
    {
      title: "Services",
      resources: [
        {
          name: "Builds",
          link: "https://vanlifecustoms.com/",
        },
        {
          name: "Repairs",
          link: "https://www.contravans.com/camper-van-repair-services",
        },
        {
          name: "Specials",
          link: "https://www.travellers-autobarnrv.com/car-deals-and-campervan-specials/",
        },
      ],
    },
    {
      title: "USEFUL LINKS",
      resources: [
        {
          name: "Tours",
          link: "https://wildlandtrekking.com/trip-styles/camping-tours/",
        },
        {
          name: "Video",
          link: "https://www.youtube.com/watch?v=6Oyo36Xrr2s",
        },
      ],
    },
    {
      title: "Contact Us",
      resources: [
        {
          name: "🏠 4295 Boulder Hwy, Las Vegas, NV 89121",
          link: "https://goo.gl/maps/DvgRkbHJwQ3Hfurw7",
        },

        {
          name: "📱800-480-1111",
          link: "https://voice.google.com/u/0/about",
        },
      ],
    },
  ];

  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      linkedin="lorem_ipsum_on_linkedin"
      facebook="lorem_ipsum_on_fb"
      twitter="lorem_ipsum_on_twitter"
      instagram="lorem_ipsum_live"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="lorem_ipsum_collections"
      copyright="Vanity Vans"
      iconColor="white"
      backgroundColor="#212529"
      fontColor="white"
      copyrightColor="white"
      fontFamily="Montserrat"
      sans-serif
    />
  );
};

export default Footer;
