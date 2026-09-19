import React from 'react';

export default function CSRDescription() {
  const points = [
    "Նորագույն տեխնոլոգիաների զարգացում,",
    "Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,",
    "Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,",
    "Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12 space-y-6">
        
        {/* Paragraph 1 */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          <span className="font-bold text-[#6200EE]">Evocabank</span>-ում Կորպորատիվ սոցիալական պատասխանատվությունը կարևորագույն արժեք է, որն արտացոլվում է Բանկի գրեթե բոլոր նախաձեռնություններում: Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 pl-2 sm:pl-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-start space-x-3 text-gray-700 text-sm sm:text-base">
              <span className="h-2 w-2 mt-2 rounded-full bg-[#6200EE] flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Paragraph 2 */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
          Մեր բոլորի կողմից Կորպորատիվ սոցիալական պատասխանատվությանն ուղղված յուրաքանչյուր փոքրիկ քայլ վկայում է աշխարհն ավելի լուսավոր ու գեղեցիկ դարձնելու կարևորության մասին:
        </p>

      </div>
    </div>
  );
}