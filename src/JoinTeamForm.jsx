import React, { useState } from 'react';

export default function JoinTeamForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    facebook: '',
    linkedin: '',
    coverLetter: '',
    resume: null,
    captchaInput: ''
  });

  const [captchaCode] = useState('9JZUH3'); // Ստատիկ նմուշ CAPTCHA-ի համար

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput !== captchaCode) {
      alert('Ստուգման ծածկագիրը սխալ է:');
      return;
    }
    // Այստեղ կարող եք գրել ֆայլերի և տվյալների ուղարկման տրամաբանությունը (օրինակ՝ Firebase Firestore / Storage կամ Backend)
    console.log('FormData:', formData);
    alert('Դիմումն հաջողությամբ ուղարկվեց։');
  };

  return (
    <section className="w-full py-16 px-4 bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-purple-50">
        
        {/* Վերնագիր */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#7a1cac] mb-2">
            Դառնալ թիմի անդամ
          </h2>
          <p className="text-gray-600 text-sm">
            Եթե ցանկանում es միանալ <span className="font-semibold text-purple-700">EvocaTEAM</span>-ին, կարող es ուղարկել դիմում՝ կցելով ինքնակենսագրականը:
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Անուն */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Անուն <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              name="firstName" 
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              placeholder=""
            />
          </div>

          {/* Ազգանուն */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ազգանուն <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              name="lastName" 
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            />
          </div>

          {/* Հեռախոսահամար */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Հեռախոսահամար <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <div className="bg-gray-100 px-3 py-2.5 text-gray-700 flex items-center space-x-1 border-r border-gray-300">
                <span>🇦🇲</span>
                <span className="text-sm font-medium">+374</span>
              </div>
              <input 
                type="tel" 
                name="phone" 
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 focus:outline-none"
                placeholder="-- -- --"
              />
            </div>
          </div>

          {/* Էլ. հասցե */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Էլ. հասցե
            </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            />
          </div>

          {/* Facebook */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Facebook սոց. կայքում անձնական էջի հղում
            </label>
            <input 
              type="url" 
              name="facebook" 
              value={formData.facebook}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn սոց. կայքում անձնական էջի հղում
            </label>
            <input 
              type="url" 
              name="linkedin" 
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            />
          </div>

          {/* Ուղեկցող նամակ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ուղեկցող նամակ
            </label>
            <textarea 
              name="coverLetter" 
              rows="4"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            ></textarea>
          </div>

          {/* Վերբեռնեք Ձեր ռեզյումեն */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span>
            </label>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-purple-500 transition bg-gray-50/50">
              <span className="text-gray-500 text-sm mb-1">
                {formData.resume ? formData.resume.name : 'Կցել ֆայլը / ֆայլերը'}
              </span>
              <span className="text-purple-600 font-bold text-lg">📤</span>
              <input 
                type="file" 
                name="resume" 
                required
                onChange={handleChange}
                className="hidden" 
              />
            </label>
          </div>

          {/* Ստուգման ծածկագիր (Captcha) */}
          <div className="border border-gray-200 p-4 rounded-xl bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ստուգման ծածկագիր <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mb-3">
              <input 
                type="text" 
                name="captchaInput" 
                required
                placeholder="Մուտքագրեք ծածկագիրը"
                value={formData.captchaInput}
                onChange={handleChange}
                className="w-1/2 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <button 
                type="button" 
                onClick={() => window.location.reload()} 
                className="text-gray-500 hover:text-gray-750 text-xl p-2"
                title="Թարմացնել"
              >
                🔄
              </button>
            </div>
            {/* Պատկերային իմիտացիա */}
            <div className="w-48 bg-white border border-gray-300 py-3 rounded-lg flex items-center justify-center select-none shadow-inner">
              <span className="tracking-widest font-serif italic text-xl font-bold text-gray-700 line-through decoration-gray-400">
                {captchaCode}
              </span>
            </div>
          </div>

          {/* Կոճակ */}
          <button 
            type="submit"
            className="w-full bg-[#7a1cac] hover:bg-[#681592] text-white font-medium py-3 rounded-full transition shadow-lg cursor-pointer"
          >
            Ես ուզում եմ աշխատել Evoca-ում :)
          </button>

        </form>
      </div>
    </section>
  );
}