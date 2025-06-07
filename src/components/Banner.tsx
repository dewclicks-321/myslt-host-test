import { useEffect, useState } from "react";
import fetchBannerData from "../services/fetchBannerData";
import { useTranslation } from 'react-i18next';
import { BannerData } from "../types/types";
import "./Banner.css";
import vas1 from "../assets/images/VASIcons/Group 39680.png";
import vas2 from "../assets/images/VASIcons/Group 39681.png";
import vas3 from "../assets/images/VASIcons/Group 39682.png";
import vas4 from "../assets/images/VASIcons/Group 39683.png";
import vas5 from "../assets/images/VASIcons/Group 39684.png";


const Banner = () => {
  const [bannerData, setBannerData] = useState<BannerData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const { t } = useTranslation();

  const items = [
    {image:vas1, url:"https://duthaya.lk/"},
    {image:vas2, url:"https://kaspersky-dp.slt.lk/customerProductList"},
    {image:vas3, url:"https://www.slt.lk/en/peotv-go"},
    {image:vas4, url:"https://play.google.com/store/apps/details?id=com.arimac.slt&hl=en&gl=US"},
    {image:vas5, url:"https://storage.slt.lk/portal/new-registration/"},
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBannerData();
      if (data) {
        setBannerData(data);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerData.length); // Change to next image
        setFade(true);
      }, 50);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerData.length]);

  return (
    <>
    <div className="banner-container">
      {bannerData.length > 0 && (
        <div 
          className={`banner-image ${fade ? 'fade-in' : 'fade-out'}`}
          style={{
            backgroundImage: `url(${bannerData[currentImageIndex]?.url})`
          }}
        />
      )}
    </div>
    <div className="value-added-services">
    <h3>{t('valueAddedServices.valueAddedServices')}</h3>
    <div className="service-icons">
    {items.map((item, index) => (
          <a 
            key={index}
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="service-icon-rightside"
          >
            <img src={item.image} alt="Value Added Service" className="vas-icon-image" />
          </a>
        ))}
    </div>
    </div>
    </>
  );
};

export default Banner;