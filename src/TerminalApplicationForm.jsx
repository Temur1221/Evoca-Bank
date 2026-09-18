import React, { useState } from 'react';


export default function TerminalApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    companyName: '',
    hvhh: '',
    creationDate: '',
    legalAddress: '',
    directorName: '',
    directorSurname: '',
    directorPassport: '',
    passportDate: '',
    passportIssuedBy: '',
    contactPhone: '',
    contactEmail: '',
    legalForm: 'ՍՊԸ',
    terminalType: 'POS',
    commercialName: '',
    commercialAddress: '',
    internetProvider: '',
    turnover: '',
    description: '',
    previousExperience: '',
    estimatedTurnover: '',
    notes: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ուղարկված տվյալները:", formData);
    alert("Հայտը հաջողությամբ ուղարկվեց!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-purple-100">
          
          <h1 className="text-2xl font-bold text-[#5B00EB] mb-6">
            Տերմինալի տեղադրման հայտ
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h2 className="text-lg font-semibold text-purple-900">
                V-POS, POS կամ mPOS տերմինալի տեղադրման հայտ
              </h2>
            </div>

            {/* Անուն Ազգանուն */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Անուն</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ազգանուն</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            {/* Հեռախոսի համար */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Հեռախոսի համար</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                placeholder="+374 -"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Կազմակերպության անվանում և ՀՎՀՀ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Կազմակերպության անվանում *</label>
                <input 
                  type="text" 
                  name="companyName" 
                  required 
                  value={formData.companyName} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ՀՎՀՀ *</label>
                <input 
                  type="text" 
                  name="hvhh" 
                  required 
                  value={formData.hvhh} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            {/* Ստեղծման ամսաթիվ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Կազմակերպության ստեղծման ամսաթիվ օր/ամիս/տարի *</label>
              <input 
                type="date" 
                name="creationDate" 
                required 
                value={formData.creationDate} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Իրավաբանական հասցե */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Իրավաբանական հասցե</label>
              <input 
                type="text" 
                name="legalAddress" 
                value={formData.legalAddress} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Տնօրենի Անուն Ազգանուն */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Տնօրենի Անուն</label>
                <input 
                  type="text" 
                  name="directorName" 
                  value={formData.directorName} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Տնօրենի Ազգանուն</label>
                <input 
                  type="text" 
                  name="directorSurname" 
                  value={formData.directorSurname} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            {/* Տնօրենի անձնագիր */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Տնօրենի անձնագրի համարը *</label>
                <input 
                  type="text" 
                  name="directorPassport" 
                  required 
                  value={formData.directorPassport} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Անձնագրի տրման ամսաթիվը *</label>
                <input 
                  type="date" 
                  name="passportDate" 
                  required 
                  value={formData.passportDate} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ում կողմից է տրված *</label>
                <input 
                  type="text" 
                  name="passportIssuedBy" 
                  required 
                  value={formData.passportIssuedBy} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            {/* Կոնտակտային անձի տվյալներ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Իրավասու կոնտակտային անձի հեռախոսահամար *</label>
                <input 
                  type="text" 
                  name="contactPhone" 
                  required 
                  value={formData.contactPhone} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Իրավասու կոնտակտային անձի էլ. փոստ *</label>
                <input 
                  type="email" 
                  name="contactEmail" 
                  required 
                  value={formData.contactEmail} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            {/* Իրավական ձև */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Կազմակերպության իրավական ձևը *</label>
              <div className="flex flex-wrap gap-6">
                {['ԱՁ', 'ՍՊԸ', 'ՓԲԸ', 'ԲԲԸ', 'Այլ'].map((form) => (
                  <label key={form} className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="legalForm" 
                      value={form} 
                      checked={formData.legalForm === form}
                      onChange={handleChange}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">{form}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Պահանջվող տերմինալի ձևը */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Պահանջվող տերմինալի ձևը *</label>
              <div className="flex flex-wrap gap-6">
                {['POS', 'ՏՀՎ POS', 'V-POS', 'M-POS'].map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="terminalType" 
                      value={type} 
                      checked={formData.terminalType === type}
                      onChange={handleChange}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Առևտրային կետի անվանում */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Առևտրային և սպասարկման կետի անվանում (հայերեն և անգլերեն) *</label>
              <textarea 
                name="commercialName" 
                required 
                rows="2"
                value={formData.commercialName} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>

            {/* Առևտրային կետի հասցե */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Առևտրային և սպասարկման կետի հասցե</label>
              <textarea 
                name="commercialAddress" 
                rows="2"
                value={formData.commercialAddress} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>

            {/* Ինտերնետային կապ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ինտերնետային կապի անվանում (V-POS-ի դեպքում)</label>
              <input 
                type="text" 
                name="internetProvider" 
                value={formData.internetProvider} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Շրջանառություն */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Վերջին տարվա, ամսվա միջին շրջանառությունը ՀՀ դրամով</label>
              <input 
                type="text" 
                name="turnover" 
                value={formData.turnover} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Նկարագիր */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Կազմակերպության կողմից վաճառվող ապրանքների կամ ծառայությունների համառոտ նկարագիրը *</label>
              <textarea 
                name="description" 
                required 
                rows="3"
                value={formData.description} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>

            {/* Նախկին փորձ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Արդյո՞ք նախկինում վճարումներ ընդունել եք վճարային քարտերով... *</label>
              <textarea 
                name="previousExperience" 
                rows="3"
                value={formData.previousExperience} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>

            {/* Կանխատեսվող շրջանառություն */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Որքա՞ն ամսական իրացում եք կանխատեսում վճարային քարտերով վճարումներով *</label>
              <input 
                type="text" 
                name="estimatedTurnover" 
                required 
                value={formData.estimatedTurnover} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Նշումներ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Նշումների համար</label>
              <textarea 
                name="notes" 
                rows="2"
                value={formData.notes} 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>

            {/* Համաձայնություն */}
            <div className="flex items-start space-x-2 pt-2">
              <input 
                type="checkbox" 
                name="agreement" 
                id="agreement"
                required 
                checked={formData.agreement}
                onChange={handleChange}
                className="mt-1 text-purple-600 focus:ring-purple-500 rounded"
              />
              <label htmlFor="agreement" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                Սույն հայտը լրացնելով՝ հավաստում եմ, որ տրամադրված տվյալները ստույգ են, լրիվ և պարունակում են համապատասխան բովանդակություն:
              </label>
            </div>

            {/* Ուղարկել կոճակ */}
            <div className="text-center pt-6">
              <button 
                type="submit" 
                className="bg-[#5B00EB] hover:bg-purple-700 text-white font-medium py-3 px-10 rounded-full shadow-lg transition-all"
              >
                Ուղարկել
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}