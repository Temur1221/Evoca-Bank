import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Գաղտնաբառի տեսանելիության վիճակը
  const [showQrModal, setShowQrModal] = useState(false);   // QR պոպ-ափի վիճակը

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Խնդրում ենք լրացնել մուտքանունը և գաղտնաբառը');
      return;
    }
    alert(`Մուտք դեպի համակարգ՝ ${username}`);
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col justify-between font-sans relative">
      
      {/* Վերնագիր (Header) */}
      <header className="bg-white px-8 py-4 shadow-sm flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-wider text-[#333] flex items-center space-x-1">
          <img src="https://payments.evoca.am/assets/images/logo.png" alt="" />
        </Link>
        <div>
          <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition cursor-pointer">
            🌐
          </button>
        </div>
      </header>

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow flex items-center justify-center px-4 py-10 relative">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12">
          
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Մուտք համակարգ</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="text"
                placeholder="Մուտքանուն"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#6200EE] placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} // Փոխվում է տեքստի կամ գաղտնաբառի տիպի
                placeholder="Գաղտնաբառ"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#6200EE] placeholder-gray-400 pr-12"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} // Սեղմելիս փոխում է վիճակը
                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showPassword ? '👁️‍🗨️' : '👁️'}
              </button>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 bg-[#6200EE] hover:bg-[#5000cc] text-white font-bold rounded-xl transition cursor-pointer shadow-md text-sm"
            >
              Մուտք
            </button>
          </form>

          <div className="text-center mt-4">
            <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs text-gray-500 hover:text-[#6200EE] transition">
              Մոռացե՞լ եք մուտքանունը կամ գաղտնաբառը
            </a>
          </div>

          {/* Մուտք QR կոդով կոճակ */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
            <button 
              onClick={() => setShowQrModal(true)}
              className="flex items-center space-x-2 text-xs font-semibold text-gray-700 hover:text-[#6200EE] transition bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 cursor-pointer shadow-sm"
            >
              <span>📱</span>
              <span>Մուտք QR կոդով</span>
            </button>
          </div>

          <div className="text-center mt-6">
            <a href="#old" onClick={(e) => e.preventDefault()} className="text-xs text-gray-400 hover:underline">
              Կայքի հին տարբերակ
            </a>
          </div>

        </div>
      </main>

      {/* 📱 QR Կոդի մոդալ պատուհան (Modal) */}
      {showQrModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 relative flex flex-col items-center text-center">
            
            {/* Փակելու խաչաձև կոճակ */}
            <button 
              onClick={() => setShowQrModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* QR Կոդի նկար */}
            <div className="my-4 p-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAACH0lEQVR4nO2Z262EMAxEI20BlETrlEQBSLnzSCDLosv3SIkQC+Hsh7E9dkKpb+MoE5nvZQbDe5IUjvWzl6OUY9k4vWy4xfhkIvit+3qQWmvdiNdN13wUiewFE7AYZ9pKi4mLjUbWssDKjc4Uno4gDBWS7YBjgxEFJoMRUbkg8+jMp9iNQbp43I4nfQlBLi2X9xChFUY/F74MBImFYVHnQ52hi6C60WEI7vicdwxGnSHzjUpEoOhMNRoKNzJIMSN1TEUUkpINCbye8PbLjVEIJ2CivKdi1epV920egmk683wIHyrtqCWZiCSQrQRzC9dwoBrbMRuzEGkhJYQsIrRcctiNDkPcEzW1UH+Bf7hvCkWUUj0Y1V8w4Zx2qQizrZ150Jn0pJqLRIRlii05Q9K62GX+qgFZSOlrJi81pIvs/licMxF3RhIPagZegM6cuUpWFCLXKTAVmxKSH4HPQhSVbijcLtmHCM/T02EIaxTVXUpvRZTRam8TERVbxqP283i0zkL9bCTiSsUuidazGmuNOCzc0xBVLS+eKIdSQe8VDW7MQrTVqqrrqLScuFdKRDzsRrvu3IcY1o1JSOsmpIgqwm0PbAjMMIRWUg6rugl3srb4FPg0RKtbf7JoPpQ/h82VTKRttbLpU3/Bi5vRYYjWUufWuFce9/eSgigwu5y7v9Au7O/3gBDE4tE+MbXPm6xgwzI3DPl/TGS+lxkMb0nyBzciwUfJaYqLAAAAAElFTkSuQmCC" 
                alt="Evoca QR Login" 
                className="w-44 h-44 object-contain mx-auto"
              />
            </div>

            {/* Վերնագիր և տեքստ */}
            <h3 className="text-lg font-bold text-gray-800 mt-2">Արագ և ապահով</h3>
            <p className="text-xs text-gray-500 mt-2 max-w-sm leading-relaxed">
              Եթե ունեք EvocaTOUCH հավելվածը, սկանավորեք QR կոդը՝ ավելի արագ մուտք գործելու համար
            </p>

          </div>
        </div>
      )}

      {/* Ստորին հատված (Footer) */}
      <footer className="bg-white border-t border-gray-200 px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 space-y-3 sm:space-y-0">
        <div>
          <p>© 2026 Էվոկաբանկ</p>
          <p className="text-[10px] text-gray-400">Բանկը վերահսկվում է ՀՀ կենտրոնական բանկի կողմից</p>
        </div>

        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1">
            <span>📞</span> <span>(+374 10) 60 55 55</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>✉️</span> <span>hello@evoca.am</span>
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="bg-gray-100 px-3 py-1 rounded-md text-[11px]">App Store</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-[11px]">Google Play</span>
        </div>
      </footer>

    </div>
  );
}