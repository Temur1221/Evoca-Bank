import React, { useState } from 'react';

export default function MainCategories() {
  const [currentView, setCurrentView] = useState('main');

  // Главное меню
  const categories = [
    {
      id: 1,
      title: 'EVOCABANK',
      view: 'evocabank',
      icon: <img src="https://resource.evoca.am/images/WebPayment/evoca.png" className="w-[100px]" alt="" />
    },
    {
      id: 2,
      title: 'Միջազգային բջջային օպերատորներ',
      view: 'international',
      icon: <img src="https://resource.evoca.am/images/WebPayment/international.png" className="w-12 h-12" alt="" />
    },
    {
      id: 3,
      title: 'Կոմունալ վճարումներ',
      view: 'utilities',
      icon: <img src="https://resource.evoca.am/images/WebPayment/utility.png" className="w-12 h-12" alt="" />
    },
    {
      id: 4,
      title: 'Ինտերնետ և TV',
      view: 'internet-tv',
      icon: <img src="https://resource.evoca.am/images/WebPayment/internettv.png" className="w-12 h-12" alt="" />
    },
    {
      id: 5,
      title: 'ՃՈ վճարներ',
      view: 'road-police',
      icon: <img src="https://resource.evoca.am/images/WebPayment/roadpolice.png" className="w-12 h-12" alt="" />
    },
    {
      id: 6,
      title: 'Վարկային կազմակերպություններ',
      view: 'credit-orgs',
      icon: <img src="https://resource.evoca.am/images/WebPayment/loan.png" className="w-12 h-12" alt="" />
    },
    {
      id: 7,
      title: 'Միջոցառումներ',
      view: 'events',
      icon: <img src="https://resource.evoca.am/images/WebPayment/event.png" className="w-12 h-12" alt="" />
    },
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'main':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((item) => (
              <div
                key={item.id}
                onClick={() => setCurrentView(item.view)}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer border border-transparent hover:border-purple-100 group w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] min-h-[180px]"
              >
                <div className="mb-4 bg-purple-50 rounded-2xl w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-gray-800 font-semibold text-sm sm:text-base leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        );

      case 'evocabank':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('loan-options')} className="card-item"><span>Վարկի մարում</span><img src="https://resource.evoca.am/images/webPayment/Account-Replenishment.png" alt="" /></div>
            <div onClick={() => setCurrentView('account')} className="card-item"><span>Հաշվի համալրում</span><img src="https://resource.evoca.am/images/webPayment/Account-Replenishment.png" alt="" /></div>
            <div onClick={() => setCurrentView('card')} className="card-item"><span>Քարտի համալրում</span><img src="https://resource.evoca.am/images/webPayment/cardtocard.png" alt="" /></div>
          </div>
        );
      case 'loan-options':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('loan-regular')} className="card-item"><span>Հերթական մարում</span></div>
            <div onClick={() => setCurrentView('loan-early')} className="card-item"><span>Վարկի մայր գումարի վաղաժամկետ մարում</span></div>
          </div>
        );

      // --- Международные операторы ---
      case 'international':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('georgia')} className="card-item"><span>Վրացական</span><img src="https://resource.evoca.am/images/WebPayment/georgian.png" alt="" /></div>
            <div onClick={() => setCurrentView('russia')} className="card-item"><span>Ռուսական</span><img src="https://resource.evoca.am/images/WebPayment/russian.png" alt="" /></div>
            <div onClick={() => setCurrentView('goodline')} className="card-item"><span>Goodline</span><img src="https://resource.evoca.am/images/webPayment/goodline.png" alt="" /></div>
            <div onClick={() => setCurrentView('yota')} className="card-item"><span>Yota</span><img src="https://resource.evoca.am/images/webPayment/yota.png" alt="" /></div>
          </div>
        );
      case 'georgia':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('geocell')} className="card-item"><span>Ջեոսել</span></div>
            <div onClick={() => setCurrentView('magti-bank')} className="card-item"><span>Մագթի Բանկի</span></div>
            <div onClick={() => setCurrentView('magti')} className="card-item"><span>Մագթի</span></div>
          </div>
        );
      case 'russia':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('beeline-ru')} className="card-item"><span>Բիլայն Ռուսաստան</span></div>
          </div>
        );

      // --- Коммунальные платежи ---
      case 'utilities':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('phone-utils')} className="card-item"><span>Հեռախոս</span><img src="https://resource.evoca.am/images/WebPayment/phone.png" alt="" /></div>
            <div onClick={() => setCurrentView('electricity')} className="card-item"><span>Լույս</span><img src="https://resource.evoca.am/images/WebPayment/electricity.png" alt="" /></div>
            <div onClick={() => setCurrentView('water')} className="card-item"><span>Ջուր</span><img src="https://resource.evoca.am/images/WebPayment/water.png" alt="" /></div>
            <div onClick={() => setCurrentView('gas-service')} className="card-item"><span>Գազի սպասարկում</span><img src="https://resource.evoca.am/images/WebPayment/gas.png" alt="" /></div>
            <div onClick={() => setCurrentView('gas-consumption')} className="card-item"><span>Գազի սպառում</span><img src="https://resource.evoca.am/images/WebPayment/gas_service.png" alt="" /></div>
          </div>
        );
      case 'phone-utils':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('beeline-phone')} className="card-item"><span>Բիլայն</span></div>
            <div onClick={() => setCurrentView('fixed-phone')} className="card-item"><span>Պարտրաք Ստելքում ֆիքսված հեռախոսակապ</span></div>
          </div>
        );

      // --- Интернет и ТВ ---
      case 'internet-tv':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            {['hypernet', 'team-net', 'viva-net', 'rostelecom', 'interactive-tv', 'ctv', 'yournet', 'arpinet', 'kt-internet', 'armcom', 'interlink'].map((net) => (
              <div key={net} onClick={() => setCurrentView(net)} className="card-item">
                <span>{net.toUpperCase()}</span>
              </div>
            ))}
          </div>
        );
        
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('cameras')} className="card-item"><span>Արագաչափեր և տեսախցիկներ[cite: 7]</span></div>
          </div>
        );

      // --- Кредитные организации ---
      case 'credit-orgs':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('bess')} className="card-item"><span>ԲԵՍՍ ՈՒՎԿ</span></div>
            <div onClick={() => setCurrentView('premium')} className="card-item"><span>Պրեմիում Կրեդիտ ՈՒՎԿ</span></div>
            <div onClick={() => setCurrentView('finca')} className="card-item"><span>ՖԻՆԿԱ ՈՒՎԿ</span></div>
            <div onClick={() => setCurrentView('mikro')} className="card-item"><span>Միկրո Կապիտալ ՈՒՎԿ</span></div>
          </div>
        );
      case 'bess':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('bess-regular')} className="card-item"><span>Հերթական մարում</span></div>
            <div onClick={() => setCurrentView('bess-early')} className="card-item"><span>Վարկի մայր գումարի վաղաժամկետ մարում</span></div>
          </div>
        );
      case 'premium':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('premium-regular')} className="card-item"><span>Հերթական մարում</span></div>
            <div onClick={() => setCurrentView('premium-early')} className="card-item"><span>Մայր գումարի մարում</span></div>
          </div>
        );
      case 'finca':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('finca-regular')} className="card-item"><span>Հերթական մարում</span></div>
            <div onClick={() => setCurrentView('finca-early')} className="card-item"><span>Վարկի մայր գումարի վաղաժամկետ մարում</span></div>
          </div>
        );
      case 'mikro':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            <div onClick={() => setCurrentView('mikro-regular')} className="card-item"><span>Հերթական մարում</span></div>
            <div onClick={() => setCurrentView('mikro-early')} className="card-item"><span>Վարկի մայր գումարի վաղաժամկետ մարում</span></div>
          </div>
        );

      // --- Мероприятия ---
      case 'events':
        return (
          <div className="text-gray-400 text-sm py-12 text-center w-full">
            Տվյալներ չկան
          </div>
        );

      // --- Формы ввода ---
      default:
        return (
          <div className="bg-white rounded-3xl p-8 shadow-sm w-full max-w-md mx-auto flex flex-col space-y-4">
            <label className="text-sm text-gray-600 font-medium">
              {currentView === 'cameras' ? '* Որոշման համար[cite: 7]' : 
               currentView.includes('loan') || currentView.includes('bess') || currentView.includes('premium') || currentView.includes('finca') || currentView.includes('mikro') ? '* Վարկային պայմանագրի համար' :
               currentView === 'account' ? '* Հաշվեհամար' :
               currentView === 'card' ? '* Քարտի համար' : '* Հեռախոսահամար / Բաժանորդի համար'}
            </label>
            <input 
              type="text" 
              placeholder="Մուտքագրեք համարը" 
              className="border border-purple-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700" 
            />
            <button className="bg-[#6200EE] hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors">
              Շարունակել
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-10 px-4 sm:px-8">
      {/* Навигационная цепочка (Breadcrumb) */}
      <div className="max-w-5xl mx-auto mb-6 text-sm text-gray-500 flex items-center space-x-2 flex-wrap">
        <span className="cursor-pointer hover:text-purple-700" onClick={() => setCurrentView('main')}>
          Գլխավոր
        </span>
        {currentView !== 'main' && (
          <>
            <span>/</span>
            <span className="text-gray-700 font-medium">
              {currentView.includes('loan') || currentView === 'account' || currentView === 'card' ? 'EVOCABANK' :
               currentView.includes('georgia') || currentView.includes('russia') || currentView === 'goodline' || currentView === 'yota' || ['geocell', 'magti-bank', 'magti', 'beeline-ru'].includes(currentView) ? 'Միջազգային բջջային օպերատորներ' :
               currentView.includes('phone') || ['electricity', 'water', 'gas-service', 'gas-consumption'].includes(currentView) ? 'Կոմունալ վճարումներ' :
               ['hypernet', 'team-net', 'viva-net', 'rostelecom', 'interactive-tv', 'ctv', 'yournet', 'arpinet', 'kt-internet', 'armcom', 'interlink'].includes(currentView) ? 'Ինտերնետ և TV' :
               currentView === 'cameras' || currentView === 'road-police' ? 'ՃՈ վճարներ' :
               ['bess', 'premium', 'finca', 'mikro'].some(org => currentView.startsWith(org)) || currentView === 'credit-orgs' ? 'Վարկային կազմակերպություններ' :
               currentView === 'events' ? 'Միջոցառումներ' : ''}
            </span>
          </>
        )}
      </div>

      {/* Заголовок */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
        {currentView === 'main' && 'Գլխավոր'}
        {currentView === 'evocabank' && 'EVOCABANK'}
        {currentView === 'loan-options' && 'Վարկի մարում'}
        {currentView === 'international' && 'Միջազգային բջջային օպերատորներ'}
        {currentView === 'georgia' && 'Վրացական'}
        {currentView === 'russia' && 'Ռուսական'}
        {currentView === 'utilities' && 'Կոմունալ վճարումներ'}
        {currentView === 'phone-utils' && 'Հեռախոս'}
        {currentView === 'internet-tv' && 'Ինտերնետ և TV'}
        {currentView === 'road-police' && 'ՃՈ վճարներ'}
        {currentView === 'cameras' && 'Արագաչափեր և տեսախցիկներ'}
        {currentView === 'credit-orgs' && 'Վարկային կազմակերպություններ'}
        {currentView === 'bess' && 'ԲԵՍՍ ՈՒՎԿ'}
        {currentView === 'premium' && 'Պրեմիում Կրեդիտ ՈՒՎԿ'}
        {currentView === 'finca' && 'ՖԻՆԿԱ ՈՒՎԿ'}
        {currentView === 'mikro' && 'Միկրո Կապիտալ ՈՒՎԿ'}
        {currentView === 'events' && 'Միջոցառումներ'}
        {currentView.includes('regular') && 'Հերթական մարում'}
        {currentView.includes('early') && 'Վարկի մայր գումարի վաղաժամկետ մարում'}
      </h2>

      {/* Контейнер */}
      <div className="max-w-5xl mx-auto">
        {renderContent()}
      </div>

      {/* Стили для карточек (можно вынести в CSS) */}
      <style>{`
        .card-item {
          background-color: white;
          border-radius: 1.5rem;
          padding: 1.5rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          cursor: pointer;
          border: 1px solid transparent;
          width: 100%;
          min-height: 160px;
        }
        .card-item:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border-color: #f3e8ff;
        }
        @media (min-width: 640px) {
          .card-item { width: calc(50% - 12px); }
        }
        @media (min-width: 768px) {
          .card-item { width: calc(33.333% - 16px); }
        }
      `}</style>
    </div>
  );
}