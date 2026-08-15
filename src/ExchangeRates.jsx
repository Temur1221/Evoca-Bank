import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function ExchangeRates() {
  const [activeTab, setActiveTab] = useState('cash'); // 'cash' | 'non-cash' | 'gold' | 'ruble'

  // 1. Կանխիկի տվյալները (Firebase-ից)
  const [cashRates, setCashRates] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Անկանխիկի տվյալները (Static)
  const nonCashRates = [
    { id: '1', code: 'USD', buy: 363, sell: 367.5, flag: 'https://flagcdn.com/w40/us.png' },
    { id: '2', code: 'EUR', buy: 415, sell: 427, flag: 'https://flagcdn.com/w40/eu.png' },
    { id: '3', code: 'RUB', buy: 4.32, sell: 4.54, flag: 'https://flagcdn.com/w40/ru.png' },
  ];

  const goldRates = [
    { purity: 375, price: 17300 },
    { purity: 500, price: 23100 },
    { purity: 583, price: 26900 },
    { purity: 750, price: 34600 },
    { purity: 875, price: 40400 },
    { purity: 900, price: 41600 },
    { purity: 958, price: 44300 },
    { purity: 999, price: 46200 },
  ];

  const rubleRates = [{ code: 'RUB', rate: '10%' }];

  // 3. Հաշվիչի state-եր
  const [haveAmount, setHaveAmount] = useState('100000');
  const [getAmount, setGetAmount] = useState('');
  const [haveCurrency, setHaveCurrency] = useState('AMD');
  const [getCurrency, setGetCurrency] = useState('USD');

  // Firebase-ից կանխիկի տվյալների ստացում
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'rates'), (snapshot) => {
      const ratesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCashRates(ratesList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 4. 🔥 ՀԱՇՎԱՐԿԻ ՖՈՒՆԿՑԻԱՆ 🔥
  useEffect(() => {
    if (!haveAmount || isNaN(haveAmount)) {
      setGetAmount('');
      return;
    }

    const currentRates = activeTab === 'cash' ? cashRates : nonCashRates;
    const numHave = parseFloat(haveAmount);

    // Եթե նույն արժույթն է ընտրված
    if (haveCurrency === getCurrency) {
      setGetAmount(numHave.toFixed(2));
      return;
    }

    // Եթե AMD -> Foreign Currency (Օրինակ AMD -> USD)
    if (haveCurrency === 'AMD') {
      const targetRate = currentRates.find((r) => r.code === getCurrency);
      if (targetRate && targetRate.sell) {
        // Բանկը վաճառում է (sell)
        const result = numHave / targetRate.sell;
        setGetAmount(result.toFixed(2));
      }
    } 
    // Եթե Foreign Currency -> AMD (Օրինակ USD -> AMD)
    else if (getCurrency === 'AMD') {
      const sourceRate = currentRates.find((r) => r.code === haveCurrency);
      if (sourceRate && sourceRate.buy) {
        // Բանկն առնում է (buy)
        const result = numHave * sourceRate.buy;
        setGetAmount(result.toFixed(2));
      }
    } 
    // Եթե Foreign -> Foreign (Օրինակ USD -> EUR)
    else {
      const sourceRate = currentRates.find((r) => r.code === haveCurrency);
      const targetRate = currentRates.find((r) => r.code === getCurrency);
      if (sourceRate && targetRate) {
        const inAmd = numHave * sourceRate.buy;
        const result = inAmd / targetRate.sell;
        setGetAmount(result.toFixed(2));
      }
    }
  }, [haveAmount, haveCurrency, getCurrency, activeTab, cashRates]);

  return (
    <div className="max-w-[1100px] mx-auto p-5 font-sans text-[#2b2b2b]">
      {/* Ծանուցման տեքստ */}
      <p className="text-[15px] font-bold leading-relaxed mb-6">
        20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
        {/* Ձախ հատված */}
        <div className="lg:col-span-2">
          {/* Տաբերի կոճակներ */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('cash')}
              className={`px-4 py-3 text-[15px] font-semibold rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'cash' ? 'bg-white text-[#2b2b2b] shadow-sm' : 'bg-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              Կանխիկ
            </button>
            <button
              onClick={() => setActiveTab('non-cash')}
              className={`px-4 py-3 text-[15px] font-semibold rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'non-cash' ? 'bg-white text-[#2b2b2b] shadow-sm' : 'bg-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              Անկանխիկ
            </button>
            <button
              onClick={() => setActiveTab('gold')}
              className={`px-4 py-3 text-[15px] font-semibold rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'gold' ? 'bg-white text-[#2b2b2b] shadow-sm' : 'bg-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              Ոսկու փոխարժեք
            </button>
            <button
              onClick={() => setActiveTab('ruble')}
              className={`px-4 py-3 text-[15px] font-semibold rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'ruble' ? 'bg-white text-[#2b2b2b] shadow-sm' : 'bg-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              Ռուբլու կանխիկ մուտք
            </button>
          </div>

          {/* Քարտի բովանդակություն */}
          <div className="bg-white rounded-r-2xl rounded-bl-2xl shadow-md grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            {/* Աղյուսակ */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-between">
              <div>
                {(activeTab === 'cash' || activeTab === 'non-cash') && (
                  <>
                    <div className="grid grid-cols-3 text-sm text-gray-400 mb-4">
                      <span></span>
                      <span className="text-right">Առք</span>
                      <span className="text-right">Վաճառք</span>
                    </div>

                    {activeTab === 'cash' && loading ? (
                      <div className="py-6 text-center text-gray-400">Բեռնվում է...</div>
                    ) : (
                      (activeTab === 'cash' ? cashRates : nonCashRates).map((item) => (
                        <div key={item.id || item.code} className="grid grid-cols-3 items-center py-3 text-base font-bold border-b border-gray-50 last:border-none">
                          <div className="flex items-center gap-2.5">
                            {item.flag && <img src={item.flag} alt={item.code} className="w-6 h-6 rounded-full object-cover" />}
                            <span>{item.code}</span>
                          </div>
                          <div className="text-right flex items-center justify-end gap-1">
                            <span className="text-red-500 text-[10px]">▼</span> {item.buy}
                          </div>
                          <div className="text-right flex items-center justify-end gap-1">
                            <span className="text-green-500 text-[10px]">▲</span> {item.sell}
                          </div>
                        </div>
                      ))
                    )}
                  </>
                )}

                {activeTab === 'gold' && (
                  <>
                    <div className="grid grid-cols-2 text-sm text-gray-400 mb-4">
                      <span>Հարգ</span>
                      <span className="text-right">Սակագին (Արժեքը ՀՀ Դրամով 1 գրամի համար)</span>
                    </div>
                    {goldRates.map((item) => (
                      <div key={item.purity} className="grid grid-cols-2 items-center py-2 text-base font-bold border-b border-gray-50 last:border-none">
                        <span>{item.purity}</span>
                        <span className="text-right">{item.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </>
                )}

                {activeTab === 'ruble' && (
                  <>
                    <div className="grid grid-cols-2 text-sm text-gray-400 mb-4">
                      <span>Արժույթ</span>
                      <span className="text-right">Սակագին</span>
                    </div>
                    {rubleRates.map((item) => (
                      <div key={item.code} className="grid grid-cols-2 items-center py-3 text-base font-bold border-b border-gray-50 last:border-none">
                        <span>{item.code}</span>
                        <span className="text-right">{item.rate}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <div className="flex justify-between items-center text-xs mt-6 pt-4 border-t border-gray-50">
                <span className="text-gray-400">Թարմացվել է` 13.08.26</span>
                {(activeTab === 'cash' || activeTab === 'non-cash') && (
                  <a href="#other" className="text-purple-700 font-semibold hover:underline">
                    Այլ արժույթներ
                  </a>
                )}
              </div>
            </div>

            {/* Հաշվիչ (Calculator) */}
            <div className="p-6 flex flex-col justify-center gap-5 bg-white">
              {/* Ունեմ */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-500">Ունեմ</label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2">
                  <input
                    type="number"
                    value={haveAmount}
                    onChange={(e) => setHaveAmount(e.target.value)}
                    className="w-full border-none outline-none text-base font-semibold"
                    placeholder="0"
                  />
                  <select
                    value={haveCurrency}
                    onChange={(e) => setHaveCurrency(e.target.value)}
                    className="font-bold text-purple-700 bg-transparent outline-none cursor-pointer pl-2"
                  >
                    <option value="AMD">AMD</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="RUB">RUB</option>
                  </select>
                </div>
              </div>

              {/* Կստանամ */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-500">Կստանամ</label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 bg-gray-50">
                  <input
                    type="text"
                    readOnly
                    value={getAmount}
                    className="w-full border-none outline-none text-base font-semibold bg-transparent text-gray-700"
                    placeholder="0"
                  />
                  <select
                    value={getCurrency}
                    onChange={(e) => setGetCurrency(e.target.value)}
                    className="font-bold text-purple-700 bg-transparent outline-none cursor-pointer pl-2"
                  >
                    <option value="USD">USD</option>
                    <option value="AMD">AMD</option>
                    <option value="EUR">EUR</option>
                    <option value="RUB">RUB</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Քարտեզի բլոկ */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">Մեր հասցեները</h3>
          <p className="text-sm text-gray-400">Բանկի հասցեները, աշխատաժամերը, բանկոմատները</p>

          <div className="h-[180px] bg-slate-100 rounded-2xl flex items-center justify-center text-gray-400 font-semibold mt-2">
            <span>Yerevan Map</span>
          </div>

          <button className="w-full bg-purple-50 text-purple-700 font-semibold py-3.5 px-5 rounded-full flex items-center justify-between mt-2 hover:bg-purple-100 transition-colors">
            <span>Դիտել քարտեզը</span>
            <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}