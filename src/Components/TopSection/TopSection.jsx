import React from "react";

const TopSection = () => {
  const services = [
    "Network Security",
    "Cloud Protection",
    "Threat Detection",
    "Data Encryption",
    "Cyber Intelligence",
    "Security Consulting",
    "Penetration Testing",
    "Endpoint Security",
  ];

  return (
    <section
      aria-label="Cyber Security Services Banner"
      className="fixed top-0 left-0 w-full z-50 overflow-hidden
      bg-black border-b border-green-500/30
      shadow-[0_0_15px_rgba(0,255,136,0.2)]"
    >
      <div className="relative flex items-center overflow-hidden py-3">
        
        {/* Infinite Moving Track */}
        <div className="marquee-track">
          {[...services, ...services].map((service, index) => (
            <div key={index} className="service-item">
              
              {/* Green Glow Dot */}
              <span className="service-dot"></span>

              {/* Service Text */}
              <p>{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 22s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 2rem;
          white-space: nowrap;
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .service-item:hover {
          color: #00ff88;
          transform: scale(1.05);
        }

        .service-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #00ff88;
          box-shadow: 0 0 12px #00ff88;
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .service-item {
            padding: 0 1.2rem;
            font-size: 0.85rem;
          }

          .marquee-track {
            animation-duration: 16s;
          }
        }

        @media (max-width: 480px) {
          .service-item {
            padding: 0 1rem;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TopSection;