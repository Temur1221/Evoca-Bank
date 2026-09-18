import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function EvocainvestDetails() {
  const [details, setDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isVideosOpen, setIsVideosOpen] = useState(true);
  const [openFaqIds, setOpenFaqIds] = useState([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+374',
    phone: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const countryCodes = [
    { code: '+374', label: '🇦🇲 +374' },
    { code: '+7', label: '🇷🇺 +7' },
    { code: '+1', label: '🇺🇸 +1' },
    { code: '+49', label: '🇩🇪 +49' },
    { code: '+33', label: '🇫🇷 +33' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const qDetails = query(collection(db, 'evocainvestDetails'), orderBy('order', 'asc'));
        const querySnapshotDetails = await getDocs(qDetails);
        setDetails(querySnapshotDetails.docs.map(doc => doc.data()));

        const qVideos = query(collection(db, 'evocainvestVideos'), orderBy('order', 'asc'));
        const querySnapshotVideos = await getDocs(qVideos);
        setVideos(querySnapshotVideos.docs.map((doc, index) => ({
          id: doc.id || index,
          ...doc.data()
        })));

        const qFaq = query(collection(db, 'evocainvestFaq'), orderBy('order', 'asc'));
        const querySnapshotFaq = await getDocs(qFaq);
        setFaqs(querySnapshotFaq.docs.map((doc, index) => ({
          id: doc.id || index,
          ...doc.data()
        })));

      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    console.log('Form submitted:', formData);
    alert('Հայցը հաջողությամբ ուղարկվեց!');
  };

  const getEmbedUrl = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const toggleFaq = (id) => {
    setOpenFaqIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-6 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto space-y-8">
      
      {/* 1. Առաջին բլոկ՝ Apple, Tesla, Google, Amazon... */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6 text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Apple, Tesla, Google, Amazon, թե՞ Nike:
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold text-[#4A00E0]">EvocaINVEST</span>-ի միջոցով դու կարող ես ներդրումներ կատարել միջազգային և տեղական կապիտալի շուկաներում: Իսկ բրոքերային հաշիվ կարող ես բացել ընդամենը մի քանի րոպեում՝ անմիջապես <span className="font-semibold text-[#4A00E0]">EvocaTOUCH</span> հավելվածից:
          </p>
          <p className="text-base text-gray-700 font-medium">
            Գնիր բաժնետոմսեր, պարտատոմսեր, ETF-ներ և կառավարիր պորտֆոլիոդ մեկ հարթակից:
          </p>
        </div>

        {/* Քո ներդրումային գործիքները */}
        <div className="space-y-6 pt-4 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-[#4A00E0]">
            Քո ներդրումային գործիքները
          </h3>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold text-[#4A00E0]">EvocaINVEST</span>-ը հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներում՝ ընտրելով քեզ հարմար ռազմավարություն:
          </p>

          <ul className="space-y-4 pt-2">
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A00E0] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-base">
                <strong className="text-gray-900">Բաժնետոմսեր՝</strong> ներդրումներ համաշխարհային առաջատար ընկերություններում
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A00E0] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-base">
                <strong className="text-gray-900">Պարտատոմսեր և եվրոպարտատոմսեր՝</strong> ավելի կանխատեսելի ներդրումներ և կայուն եկամտի հնարավորություն
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A00E0] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-base">
                <strong className="text-gray-900">ETF-ներ՝</strong> դիվերսիֆիկացված ներդրումներ մեկ գործիքի միջոցով
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* 2. Երկրորդ բլոկ՝ 3 պարզ քայլով */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 text-gray-800">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Անկախ նրանից՝ նոր ես սկսում ներդրում կատարել, թե՞ արդեն ունես փորձ, կատարում ես երկարաժամկետ, թե՞ կարճաժամկետ ներդրումներ, <span className="font-semibold text-[#4A00E0]">EvocaINVEST</span>-ը տալիս է բոլոր անհրաժեշտ գործիքները քո ներդրումային ռազմավարության համար:
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#4A00E0] pt-2">
          Բացիր բրոքերային հաշիվ 3 պարզ քայլով
        </h2>

        <div className="space-y-6 pt-2">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="text-[#4A00E0]">1.</span> Ներբեռնիր EvocaTOUCH հավելվածը
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Բանկային և ներդրումային գործառույթները՝ մեկ հավելվածում: Հասանելի է iOS և Android համակարգերում:
            </p>
            <p className="text-gray-600 text-sm">
              Ներբեռնելու համար անցիր <span className="text-[#4A00E0] font-medium cursor-pointer underline">App Store և Google Play</span>:
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="text-[#4A00E0]">2.</span> Բացիր Բրոքերային հաշիվ
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Մուտք գործիր հավելվածի «Հաշիվներ» բաժին, ընտրիր «Բրոքերային հաշիվ» և ավարտիր գրանցումը մի քանի րոպեում՝ առանց Բանկ այցելելու անհրաժեշտության:
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="text-[#4A00E0]">3.</span> Սկսիր ներդրումներ կատարել
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Փնտրիր ընկերությունն ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրիր լիմիտային կամ շուկայական պատվեր և հետևիր պորտֆոլիոդ:
            </p>
          </div>
        </div>

        {/* Նկարը քայլերից հետո */}
        <div className="w-full pt-4 border-t border-gray-100">
          <img 
            src="https://www.evoca.am/file_manager/other/invest%20steps%20(1).png" 
            alt="EvocaINVEST steps" 
            className="w-full h-auto rounded-2xl object-cover shadow-md"
          />
        </div>
      </div>

      {/* 3. Երրորդ բլոկ՝ Ինչու՞ ընտրել EvocaINVEST ներդրումային հարթակը */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 text-gray-800">
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A00E0]">
          Ինչու՞ ընտրել EvocaINVEST ներդրումային հարթակը
        </h2>

        {/* 24/7 պատվերներ */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[#4A00E0]">
            24/7 պատվերներ
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Տեղադրիր պատվերդ ցանկացած ժամի, այն կհերթագրվի և կկատարվի ավտոմատ՝ բորսայի բացվելուն պես:
          </p>
        </div>

        {/* Մրցակցային սակագներ */}
        <div className="space-y-2 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-bold text-[#4A00E0]">
            Մրցակցային սակագներ
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Մրցակցային և թափանցիկ միջնորդավճարներ: Ամբողջական սակագներին ծանոթանում ես նախքան գործարքը հաստատելը:
          </p>
        </div>

        {/* Լիմիտային և շուկայական պատվերներ */}
        <div className="space-y-2 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-bold text-[#4A00E0]">
            Լիմիտային և շուկայական պատվերներ
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Պատվերներն ավտոմատ կիրառվում են որպես լիմիտային՝ գնի ճշգրտության համար: Անհրաժեշտության դեպքում կարող ես ակնթարթորեն անցնել շուկայական պատվերի, եթե արագությունն ավելի կարևոր է:
          </p>
        </div>

        {/* Զարգացրո՛ւ ոչ միայն պորտֆոլիոդ, այլ նաև գիտելիքդ */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-bold text-[#4A00E0]">
            Զարգացրո՛ւ ոչ միայն պորտֆոլիոդ, այլ նաև գիտելիքդ
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Միանալով <span className="font-semibold text-[#4A00E0]">EvocaINVEST</span> տելեգրամյան ալիքին՝ դու կգտնես.
          </p>

          <ul className="space-y-3 pt-1">
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A00E0] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-base">
                Ներդրումների մասին պարզ և հասկանալի նյութեր,
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A00E0] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-base">
                Շուկայական հետազոտություններ և վերլուծություններ,
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A00E0] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-base">
                Փորձագետների կարծիքներ միջազգային ներդրումային մասնագետների կողմից,
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A00E0] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-base">
                Համաշխարհային ներդրումային շուկաների մասին կարևոր թարմացումներ:
              </p>
            </li>
          </ul>

          <p className="text-base text-gray-700 pt-2">
            Միացիր մեր տելեգրամյան ալիքին <a href="#" className="text-[#4A00E0] font-medium underline">այս հղումով</a>:
          </p>
        </div>
      </div>

      {/* 4. Հետադարձ կապի ֆորմա */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#4A00E0]">
            Դեռ չե՞ս օգտվում EvocaINVEST-ից
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Պատրաստ ես բացահայտել ներդրումների աշխարհը:
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Լրացրու տվյալներդ, և մենք կապ կհաստատենք քեզ հետ:
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Կամ կարողես անմիջապես կապ հաստատել մեր ներդրումային բաժնի հետ.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <a 
              href="mailto:Investsecurities@evoca.am" 
              className="flex items-center gap-2 text-[#4A00E0] font-medium hover:underline text-base"
            >
              <span>✉️</span> Investsecurities@evoca.am
            </a>
            <a 
              href="tel:+37433777453" 
              className="flex items-center gap-2 text-[#4A00E0] font-medium hover:underline text-base"
            >
              <span>📞</span> +37433777453
            </a>
          </div>
        </div>

        <div className="text-center space-y-2 pt-6 border-t border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            EvocaINVEST Հետադարձ կապ
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Անձնական տվյալներ</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">👤</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Անուն"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4A00E0] text-gray-800"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Ազգանուն"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4A00E0] text-gray-800"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Էլ. Հասցե</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">✉️</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl focus:outline-none text-gray-800 ${
                  emailError ? 'border-red-500' : 'border-gray-200 focus:border-[#4A00E0]'
                }`}
                required
              />
            </div>
            {emailError && <p className="text-red-500 text-sm mt-1">Enter a valid email address.</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Հեռախոսահամար</label>
            <div className="flex gap-2">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none text-gray-800 font-medium"
                >
                  {formData.phoneCode} <span>▼</span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-36 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                    {countryCodes.map((item) => (
                      <div
                        key={item.code}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, phoneCode: item.code }));
                          setIsDropdownOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4A00E0] text-gray-800"
                required
              />
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-12 py-3 bg-[#00B09B] hover:bg-[#009b86] text-white font-medium rounded-full shadow-md transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Կարևոր բաժին */}
        <div className="space-y-4 pt-6 border-t border-gray-100">
          <h3 className="text-lg font-bold text-[#4A00E0]">
            Կարևոր
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">EvocaINVEST</span>-ը հնարավորություն է տալիս բացահայտել ներդրումային հնարավորությունները. այս հարթակում և մյուս սոց. հարթակներում ներկայացված նյութերը բացառապես տեղեկատվական նպատակի համար են:
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Յուրաքանչյուր ներդրումային որոշում կայացվում է օգտատիրոջ կողմից՝ սեփական գնահատման հիման վրա:
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Ներդրումները կապված են ռիսկերի հետ, հետևաբար նախորդ ցուցանիշները չեն կարող դիտվել որպես ապագա արդյունքների երաշխիք:
          </p>
        </div>
      </div>

      {/* 5. Տեսանյութերի բլոկ */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6 text-gray-800">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-gray-900 border-b pb-4">
          Անհրաժեշտ տեղեկատվություն
        </h2>

        <div className="space-y-4">
          <div 
            onClick={() => setIsVideosOpen(!isVideosOpen)}
            className="text-lg font-bold text-[#4A00E0] flex items-center justify-between cursor-pointer select-none hover:opacity-80 transition-opacity"
          >
            <span>EvocaINVEST օգտակար նյութեր</span>
            <span className={`transform transition-transform duration-300 ${isVideosOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>

          {isVideosOpen && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 transition-all">
              {!loading && videos.length > 0 ? (
                videos.map((video) => (
                  <div key={video.id} className="space-y-2 bg-gray-50 p-4 rounded-2xl shadow-sm">
                    <div className="w-full h-48 overflow-hidden rounded-xl bg-black">
                      <iframe
                        src={getEmbedUrl(video.youtubeUrl)}
                        title={video.title || 'EvocaINVEST video'}
                        className="w-full h-full rounded-xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-sm font-medium text-gray-800 pt-1">
                      {video.title}
                    </p>
                  </div>
                ))
              ) : (
                !loading && <p className="text-gray-500 text-sm">Տեսանյութեր առայժմ չկան:</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 6. Հաճախ տրվող հարցեր (FAQ) */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6 text-gray-800">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-4">
          Հաճախ տրվող հարցեր
        </h2>

        <div className="space-y-3 pt-2">
          {!loading && faqs.length > 0 ? (
            faqs.map((faq) => {
              const isOpen = openFaqIds.includes(faq.id);
              return (
                <div key={faq.id} className="border border-purple-100 rounded-2xl overflow-hidden transition-all shadow-sm">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 bg-purple-50/50 hover:bg-purple-50 text-left font-medium text-gray-800 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`transform transition-transform duration-300 text-[#4A00E0] ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      {faq.question}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white text-gray-600 text-sm sm:text-base border-t border-purple-50 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            !loading && <p className="text-gray-500 text-sm">Հարցեր առայժմ չկան:</p>
          )}
        </div>
      </div>

    </div>
  );
}