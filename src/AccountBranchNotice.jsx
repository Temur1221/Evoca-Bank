import React from 'react';

export default function AccountBranchNotice() {
  return (
    <section className="mb-12 w-full space-y-6">
      <div className="relative overflow-hidden shadow-sm h-[350px] md:h-[420px] flex items-center justify-center text-center p-6 w-full">
        {/* Հետնամասի նկարը և մուգ ֆոնային շերտը */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('https://www.evoca.am/images-cache/menu/1/16111710051163/1920x530.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Կենտրոնական տեքստը */}
        <div className="relative z-10 max-w-3xl text-white space-y-4 px-4">
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            Հաշիվներ բացելու նպատակով կարող եք դիմել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ (բացառությամբ «Էրեբունի»-ի):
          </p>
        </div>
      </div>
    </section>
  );
}   