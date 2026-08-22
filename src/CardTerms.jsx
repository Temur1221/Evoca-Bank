import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Accordion from './Accordion';

// Փաստաթղթերի վերջնական ցանկը
const documents = [
  { 
    title: "Վճարային քարտեր", 
    url: "https://www.evoca.am/files/global_files/1/pention-cards.pdf" 
  },
  { 
    title: "Evoca Gift քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/evoca-gift-tariffs.pdf" 
  },
  { 
    title: "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 08.06.26", 
    url: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf" 
  },
  { 
    title: "Visa Digital քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/visa-digital-03-25.pdf" 
  },
  { 
    title: "«ՀԱՎԱՍԱՐ» ԲԲԸ վճարային քարտերի կիրառմամբ EvocaTouch բջջային հավելվածով թվայնացված ք...", 
    url: "https://www.evoca.am/files/global_files/1/digital-cards-terms-and-conditions.pdf" 
  },
  { 
    title: "Visa Infinite քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/visa-infinite-2026.pdf" 
  },
  { 
    title: "UnionPay Business Platinum քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/union-pay-17-03-26.pdf" 
  },
  { 
    title: "UnionPay UPI Gold քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/union-pay-gold-17-03-26.pdf" 
  },
  { 
    title: "Visa Vision քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/vision-03-2026.pdf" 
  },
  { 
    title: "Mastercard World Digital (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/mastercard-world.pdf" 
  },
  { 
    title: "Dalma Gift քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/dalma-gift-cards.pdf" 
  },
  { 
    title: "Garage Masters' Mall Gift քարտեր", 
    url: "https://www.evoca.am/files/global_files/1/garage-master-mall-gifts.pdf" 
  },
  { 
    title: "Digital Gift քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/digital-gift-cards.pdf" 
  },
  { 
    title: "Rio Gift քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/rio-gift-cards.pdf" 
  },
  { 
    title: "MIG Gift քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/mbg-gift-cards.pdf" 
  },
  { 
    title: "Վճարային քարտերի տրամադրման և սպասարկման պայմաններ 01.02.2026թ.", 
    url: "https://www.evoca.am/files/global_files/1/card-operation-procedure-2026.pdf" 
  },
  { 
    title: "Համաթիվ բանկային ծառայությունների մատուցման պայմաններ 16.05.2025", 
    url: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf" 
  },
  { 
    title: "Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026", 
    url: "https://www.evoca.am/files/global_files/1/credit-and-debit-cards-17-03-26.pdf" 
  },
  { 
    title: "Evoca Travel (Տեղեկատվական ամփոփագիր) 17.03.2026", 
    url: "https://www.evoca.am/files/global_files/1/evoca-travel-17-03-26.pdf" 
  },
  { 
    title: "Visa Platinum քարտեր (Տեղեկատվական ամփոփագիր)", 
    url: "https://www.evoca.am/files/global_files/1/visa-platinum.pdf" 
  },
  { 
    title: "USSD և 3D Secure ծառայություն", 
    url: "https://www.evoca.am/files/global_files/1/16169977265869.pdf" 
  }
];

const DocumentsList = () => (
  <div className="mt-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
    <div className="space-y-3">
      {documents.map((doc, index) => (
        <a 
          key={index} 
          href={doc.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100"
        >
          <span className="mr-3 text-purple-700">📄</span>
          <span className="text-gray-700 font-medium">{doc.title}</span>
        </a>
      ))}
    </div>
  </div>
);

const SubNavigation = () => {
  const menuItems = [
    { title: 'Քարտեր', link: '/cards' },
    { title: 'Քարտերի տրամադրում և սպասարկում', link: '/terms' },
    { title: 'Սոցիալական ապահովության վճարային քարտեր', link: '/social-cards' },
    { title: 'Evoca Benefits', link: '/benefits' },
  ];

  return (
    <nav className="bg-[#4C1D95] flex flex-wrap justify-center items-center py-4 px-4 gap-8 text-white text-sm font-medium">
      {menuItems.map((item, index) => {
        const isActive = item.title === 'Քարտերի տրամադրում և սպասարկում';
        return (
          <a 
            key={index} 
            href={item.link} 
            className={`px-5 py-2.5 transition-all rounded-lg ${
              isActive 
                ? 'bg-[#3B0764] shadow-inner font-semibold' 
                : 'hover:bg-white/10'
            }`}
          >
            {item.title}
          </a>
        );
      })}
    </nav>
  );
};

export default function CardTerms() {
  return (
    <>
      <Header />
      <SubNavigation />
        <div className="max-w-[1280px] mx-auto px-4 py-10 font-sans bg-white min-h-[60vh]">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Քարտերի տրամադրում և սպասարկում</h1>
        <Accordion />
        <DocumentsList />
      </div>

      <Footer />
    </>
  );
}