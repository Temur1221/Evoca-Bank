import { useEffect, useState } from "react";

const faces = [
  "https://www.evoca.am/img/temp/biometric/face1.png",
  "https://www.evoca.am/img/temp/biometric/face2.png",
  "https://www.evoca.am/img/temp/biometric/face3.png",
];

const points = [
  [57, 4],
  [69, 36],
  [39, 65],
  [96, 3],
  [135, 38],
  [134, 4],
  [169, 30],
  [160, 65],
  [114, 73],
  [198, 82],
  [150, 132],
  [100, 161],
  [78, 176],
  [120, 176],
  [48, 131],
  [3, 133],
  [21, 117],
  [16, 167],
  [23, 211],
  [58, 221],
  [144, 222],
  [183, 203],
  [200, 133],
  [179, 119],
  [170, 168],
  [159, 249],
  [131, 269],
  [82, 271],
  [44, 244],
  [97, 245],
  [85, 140],
  [115, 141],
  [81, 73],
  [26, 30],
  [3, 79],
  [89, 110],
  [111, 110],
];

export default function BiometricSection() {
  const [activeFace, setActiveFace] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFace((prev) => (prev + 1) % faces.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-white">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-8 px-6 py-10 lg:flex-row lg:gap-16">

        {/* ================= LEFT ================= */}

        <div className="relative h-[500px] w-full max-w-[455px] shrink-0">

          {/* Particles */}
          <div
            id="particles-js"
            className="absolute inset-0 z-0"
          />

          {/* ================= PURPLE TRIANGLE ================= */}

          <div className="absolute left-1/2 top-[38px] z-0 -translate-x-1/2">
            <svg
              width="285"
              height="285"
              viewBox="0 0 285 285"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="purple-triangle"
            >
              <defs>
                <linearGradient
                  id="purpleGradient"
                  x1="0"
                  y1="0"
                  x2="285"
                  y2="285"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6200EE" />
                  <stop offset="1" stopColor="#8200FF" />
                </linearGradient>
              </defs>

              <path
                d="
                  M 18 0
                  H 267
                  C 278 0 285 9 279 19
                  L 155 266
                  C 150 276 135 276 130 266
                  L 6 19
                  C 0 9 7 0 18 0
                  Z
                "
                fill="url(#purpleGradient)"
              />
            </svg>
          </div>

          {/* ================= FACE ================= */}

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {faces.map((face, index) => (
              <img
                key={face}
                src={face}
                alt="person"
                className={`
                  absolute
                  w-full
                  max-w-[455px]
                  object-contain
                  transition-all
                  duration-1000
                  ease-in-out
                  ${
                    index === activeFace
                      ? "scale-85 opacity-100"
                      : "scale-80 opacity-0"
                  }
                `}
              />
            ))}
          </div>

          {/* ================= BIOMETRIC ================= */}

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

            <svg
              width="203"
              height="274"
              viewBox="0 0 203 274"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="biometric-svg"
            >

              <path
                className="biometric-line"
                d="
                  M57.8514 4L25.7432 29.954
                  M57.8514 4H96.4257
                  M57.8514 4L68.8677 36.5
                  M135 4L169.338 29.954
                  M135 4L134.743 38.8637
                  M135 4H96.4257
                  M169.338 29.954L198.324 81.7496
                  M169.338 29.954L159.527 65.2334
                  M198.324 81.7496L201 132.792
                  M198.324 81.7496L159.527 65.2334
                  M198.324 81.7496L179.149 119.917
                  M201 132.792L183.743 203.576
                  M201 132.792L179.149 119.917
                  M201 132.792L170.453 167.881
                  M183.743 203.576L159.527 248.877
                  M183.743 203.576L119.838 176.206
                  M183.743 203.576L144.321 221.036
                  M183.743 203.576L170.453 167.881
                  M159.527 248.877L130.541 269.641
                  M159.527 248.877L144.321 221.036
                  M130.541 269.641L82.2297 272
                  M130.541 269.641L144.321 221.036
                  M130.541 269.641L97.0946 244.63
                  M82.2297 272L43.5676 244.63
                  M82.2297 272L57.8514 221.036
                  M82.2297 272L97.0946 244.63
                  M43.5676 244.63L22.5135 210.654
                  M43.5676 244.63L57.8514 221.036
                  M22.5135 210.654L15.4865 167.24
                  M22.5135 210.654L57.8514 221.036
                  M22.5135 210.654L78.7973 176.206
                  M15.4865 167.24L3 132.792
                  M15.4865 167.24L48.0405 132.186
                  M15.4865 167.24L78.7973 176.206
                  M3 132.792V78.4463
                  M3 132.792L21.7297 118.029
                  M3 78.4463L25.7432 29.954
                  M3 78.4463L39.5676 65.2334
                  M3 78.4463L21.7297 118.029
                  M25.7432 29.954L81.4865 73.7274
                  M25.7432 29.954L39.5676 65.2334
                  M81.4865 73.7274H114.486
                  M81.4865 73.7274L39.5676 65.2334
                  M81.4865 73.7274L89.0676 109.535
                  M81.4865 73.7274L68.8677 36.5
                  M114.486 73.7274L159.527 65.2334
                  M114.486 73.7274L110.919 109.535
                  M114.486 73.7274L134.743 38.8637
                  M159.527 65.2334L134.743 38.8637
                  M179.149 119.917L150.162 132.186
                  M150.162 132.186L119.838 176.206
                  M150.162 132.186L110.919 109.535
                  M150.162 132.186L170.453 167.881
                  M119.838 176.206L144.321 221.036
                  M119.838 176.206L100.095 161.106
                  M119.838 176.206L115.378 139.871
                  M119.838 176.206L170.453 167.881
                  M144.321 221.036L97.0946 244.63
                  M97.0946 244.63L57.8514 221.036
                  M89.0676 109.535L48.0405 132.186
                  M89.0676 109.535H110.919
                  M89.0676 109.535L84.9324 139.871
                  M78.7973 176.206L57.8514 221.036
                  M78.7973 176.206L48.0405 132.186
                  M78.7973 176.206L100.095 161.106
                  M78.7973 176.206L84.9324 139.871
                  M21.7297 118.029L48.0405 132.186
                  M110.919 109.535L115.378 139.871
                  M100.095 161.106L84.9324 139.871
                  M100.095 161.106L115.378 139.871
                  M134.743 38.8637L96.4257 4
                  M96.4257 4L68.8677 36.5
                "
                stroke="#FFFFFF"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Points */}
              {points.map(([cx, cy], index) => (
                <circle
                  key={index}
                  cx={cx}
                  cy={cy}
                  r="2"
                  fill="#FFFFFF"
                  className="biometric-dot"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex w-full max-w-[500px] flex-col">

          <h2 className="mb-4 text-[25px] font-bold leading-[1.25] text-[#171717]">
            Դարձրեք Evocabank-ի համարները
            <br />
            բիոմետրիկ նույնականացմամբ
          </h2>

          <p className="mb-5 max-w-[470px] text-[15px] leading-6 text-[#333333]">
            Սկանավորեք QR կոդը, ներբեռնեք EvocaTOUCH
            հավելվածը, ստեղծեք ձեր հաշիվը և
            ստացեք արագ ու անվտանգ մուտք։
          </p>

          <div className="flex items-center gap-8">

            <div className="flex h-[125px] w-[125px] items-center justify-center bg-white">
              <img
                src="https://www.evoca.am/img/biometric-section-QR-Code.png"
                alt="QR code"
                className="h-full w-full object-contain"
              />
            </div>

            <button
              type="button"
              className="rounded-full bg-[#6200EE] px-7 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#5200C9]"
            >
              Իմանալ ավելին
            </button>
          </div>
        </div>
      </div>

      {/* ================= CSS ================= */}

      <style>{`
        .purple-triangle {
          filter: drop-shadow(0 8px 20px rgba(98, 0, 238, 0.08));
        }

        .biometric-svg {
          overflow: visible;
        }

        .biometric-line {
          stroke-dasharray: 7 5;
          stroke-dashoffset: 300;

          animation:
            biometricLine 3s ease-in-out infinite,
            biometricGlow 2s ease-in-out infinite;
        }

        .biometric-dot {
          transform-box: fill-box;
          transform-origin: center;

          animation: biometricDot 1.4s ease-in-out infinite;

          filter:
            drop-shadow(0 0 3px rgba(255, 255, 255, 1))
            drop-shadow(0 0 7px rgba(255, 255, 255, 0.8));
        }

        @keyframes biometricLine {
          0% {
            stroke-dashoffset: 300;
            opacity: 0.15;
          }

          20% {
            opacity: 0.35;
          }

          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          70% {
            stroke-dashoffset: -100;
            opacity: 0.9;
          }

          100% {
            stroke-dashoffset: -300;
            opacity: 0.15;
          }
        }

        @keyframes biometricGlow {
          0% {
            filter: drop-shadow(
              0 0 1px rgba(255, 255, 255, 0.4)
            );
          }

          50% {
            filter:
              drop-shadow(0 0 4px rgba(255, 255, 255, 1))
              drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
          }

          100% {
            filter: drop-shadow(
              0 0 1px rgba(255, 255, 255, 0.4)
            );
          }
        }

        @keyframes biometricDot {
          0% {
            opacity: 0.2;
            transform: scale(0.65);
          }

          50% {
            opacity: 1;
            transform: scale(1.4);
          }

          100% {
            opacity: 0.2;
            transform: scale(0.65);
          }
        }
      `}</style>
    </section>
  );
}