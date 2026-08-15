import React, { useState } from 'react';

export default function BankCalculator() {
  const [activeTab, setActiveTab] = useState('loan'); // 'loan' or 'deposit'

  // --- LOAN STATE ---
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanRate, setLoanRate] = useState(1);
  const [loanTerm, setLoanTerm] = useState(48);
  const [repayType, setRepayType] = useState('diff'); // 'diff' (Զսպանակաձև) or 'annuity' (Անուիտետ)
  const [showLoanModal, setShowLoanModal] = useState(false);

  // --- DEPOSIT STATE ---
  const [depAmount, setDepAmount] = useState(1000000);
  const [depRate, setDepRate] = useState(1);
  const [depDays, setDepDays] = useState(91);

  // --- DEPOSIT CALCULATIONS ---
  const dailyInterest = (depAmount * (depRate / 100)) / 365;
  const grossInterest = dailyInterest * depDays;
  const netInterest = grossInterest * 0.9; // 10% tax deduction

  // --- LOAN CALCULATIONS ---
  const calculateLoanSchedule = () => {
    const monthlyRate = loanRate / 100 / 12;
    let balance = loanAmount;
    const schedule = [];
    let totalInt = 0;
    let totalPrinc = 0;
    let totalPay = 0;

    const fixedPrincipal = loanAmount / loanTerm;

    if (repayType === 'annuity') {
      const monthlyPayment =
        loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
          (Math.pow(1 + monthlyRate, loanTerm) - 1));

      for (let i = 1; i <= loanTerm; i++) {
        const interest = balance * monthlyRate;
        const principal = monthlyPayment - interest;
        balance -= principal;

        totalInt += interest;
        totalPrinc += principal;
        totalPay += monthlyPayment;

        schedule.push({ month: i, interest, principal, monthlyPayment });
      }
    } else {
      // Differentiated / Զսպանակաձև
      for (let i = 1; i <= loanTerm; i++) {
        const interest = balance * monthlyRate;
        const principal = fixedPrincipal;
        const monthlyPayment = principal + interest;
        balance -= principal;

        totalInt += interest;
        totalPrinc += principal;
        totalPay += monthlyPayment;

        schedule.push({ month: i, interest, principal, monthlyPayment });
      }
    }

    return { schedule, totalInt, totalPrinc, totalPay };
  };

  const loanResults = calculateLoanSchedule();

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex justify-center items-start font-sans">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full shadow-lg mt-4">
        <h1 className="text-3xl text-slate-800 mb-8 text-serif">Հաշվիչներ</h1>

        {/* TAB BUTTONS */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-8 py-2.5 rounded-xl font-bold transition-all ${
              activeTab === 'loan'
                ? 'bg-purple-50 text-purple-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-600'
            }`}
            onClick={() => setActiveTab('loan')}
          >
            Վարկ
          </button>
          <button
            className={`px-8 py-2.5 rounded-xl font-bold transition-all ${
              activeTab === 'deposit'
                ? 'bg-purple-50 text-purple-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-600'
            }`}
            onClick={() => setActiveTab('deposit')}
          >
            Ավանդ
          </button>
        </div>

        {/* LOAN CALCULATOR TAB */}
        {activeTab === 'loan' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Row 1 Left: Վարկի գումար */}
              <div>
                <div className="border border-slate-200 rounded-2xl p-4 flex justify-between items-center relative bg-white">
                  <span className="font-bold text-slate-700 text-sm">Վարկի գումար</span>
                  <input
                    type="number"
                    className="text-right text-xl font-extrabold text-slate-800 outline-none w-1/2 bg-transparent"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-400 px-2 mt-1">
                  <span>0</span>
                  <span>50000000</span>
                </div>
              </div>

              {/* Row 1 Right: Ժամկետ */}
              <div>
                <div className="border border-slate-200 rounded-2xl p-4 flex justify-between items-center relative bg-white">
                  <span className="font-bold text-slate-700 text-sm">Ժամկետ</span>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      className="text-right text-xl font-extrabold text-slate-800 outline-none w-20 bg-transparent"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                    />
                    <span className="font-extrabold text-slate-800 text-xl">ամիս</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 px-2 mt-1">
                  <span>1 ամիս</span>
                  <span>1200 ամիս</span>
                </div>
              </div>

              {/* Row 2 Left: Տարեկան տոկոսադրույք */}
              <div>
                <div className="border border-slate-200 rounded-2xl p-4 flex justify-between items-center relative bg-white">
                  <span className="font-bold text-slate-700 text-sm">Տարեկան տոկոսադրույք</span>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      step="0.1"
                      className="text-right text-xl font-extrabold text-slate-800 outline-none w-16 bg-transparent"
                      value={loanRate}
                      onChange={(e) => setLoanRate(Number(e.target.value))}
                    />
                    <span className="font-extrabold text-slate-800 text-xl">%</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 px-2 mt-1">
                  <span>1%</span>
                  <span>36 %</span>
                </div>
              </div>

              {/* Row 2 Right: Մարման ձև */}
              <div className="flex flex-col justify-center">
                <span className="text-xs text-slate-400 mb-2 font-medium">Մարման ձև</span>
                <div className="flex gap-8 items-center">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                    <input
                      type="radio"
                      name="repayType"
                      value="diff"
                      className="w-5 h-5 accent-purple-600 cursor-pointer"
                      checked={repayType === 'diff'}
                      onChange={() => setRepayType('diff')}
                    />
                    Զսպանակաձև
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                    <input
                      type="radio"
                      name="repayType"
                      value="annuity"
                      className="w-5 h-5 accent-purple-600 cursor-pointer"
                      checked={repayType === 'annuity'}
                      onChange={() => setRepayType('annuity')}
                    />
                    Անուիտետ
                  </label>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
              <p className="text-xs text-slate-500 font-medium">
                Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
              </p>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-full font-bold text-base transition-colors shadow-md w-full md:w-auto"
                onClick={() => setShowLoanModal(true)}
              >
                Հաշվել
              </button>
            </div>
          </div>
        )}

        {/* DEPOSIT CALCULATOR TAB */}
        {activeTab === 'deposit' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left Column: Inputs */}
              <div className="space-y-6">
                <div>
                  <div className="border border-slate-200 rounded-2xl p-4 flex justify-between items-center bg-white">
                    <span className="font-bold text-slate-700 text-sm">Ներդրվող գումար</span>
                    <input
                      type="number"
                      className="text-right text-xl font-extrabold text-slate-800 outline-none w-1/2 bg-transparent"
                      value={depAmount}
                      onChange={(e) => setDepAmount(Number(e.target.value))}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 px-2 mt-1">
                    <span>0</span>
                    <span>50000000</span>
                  </div>
                </div>

                <div>
                  <div className="border border-slate-200 rounded-2xl p-4 flex justify-between items-center bg-white">
                    <span className="font-bold text-slate-700 text-sm">Տարեկան տոկոսադրույք</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        step="0.1"
                        className="text-right text-xl font-extrabold text-slate-800 outline-none w-16 bg-transparent"
                        value={depRate}
                        onChange={(e) => setDepRate(Number(e.target.value))}
                      />
                      <span className="font-extrabold text-slate-800 text-xl">%</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 px-2 mt-1">
                    <span>1 %</span>
                    <span>36 %</span>
                  </div>
                </div>

                <div>
                  <div className="border border-slate-200 rounded-2xl p-4 flex justify-between items-center bg-white">
                    <span className="font-bold text-slate-700 text-sm">Ավանդի ժամկետ</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        className="text-right text-xl font-extrabold text-slate-800 outline-none w-16 bg-transparent"
                        value={depDays}
                        onChange={(e) => setDepDays(Number(e.target.value))}
                      />
                      <span className="font-extrabold text-slate-800 text-xl">օր</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 px-2 mt-1">
                    <span>91 օր</span>
                    <span>1095 օր</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Output Results */}
              <div className="space-y-6 pt-2">
                <div className="flex justify-between items-start">
                  <span className="text-slate-700 font-bold text-sm max-w-[260px]">
                    Օրական կտրվածքով հաշվարկվող տոկոսագումար *
                  </span>
                  <strong className="text-xl font-extrabold text-slate-800">
                    {dailyInterest.toFixed(2)}
                  </strong>
                </div>

                <div className="flex justify-between items-start pt-2">
                  <span className="text-slate-700 font-bold text-sm max-w-[280px]">
                    Ավանդային պայմանագրի գործողության ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ
                  </span>
                  <strong className="text-xl font-extrabold text-slate-800">
                    {grossInterest.toFixed(2)}
                  </strong>
                </div>

                <div className="flex justify-between items-start pt-2">
                  <span className="text-slate-700 font-bold text-sm max-w-[280px]">
                    Ավանդային պայմանագրի գործողության ընթացքում ավանդատուին փաստացի վճարվող զուտ տոկոսային եկամուտ
                  </span>
                  <strong className="text-xl font-extrabold text-slate-800">
                    {netInterest.toFixed(2)}
                  </strong>
                </div>

                <p className="text-xs text-slate-400 font-medium pt-2">
                  Ներդրված ավանդի դիմաց ստացվող տոկոսագումարները հարկվում են՝ 10% եկամտային հարկի չափով
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-medium pt-4">
              Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
            </p>
          </div>
        )}
      </div>

      {/* LOAN RESULTS MODAL */}
      {showLoanModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl">
            <button
              className="absolute right-6 top-5 text-3xl text-slate-400 hover:text-slate-600 font-light"
              onClick={() => setShowLoanModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-6">
              Վարկային հաշվիչի արդյունքներ
            </h2>

            <div className="bg-slate-100 p-4 rounded-xl mb-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-slate-500 block text-xs">Գումար</span>
                <strong className="text-slate-800 font-extrabold text-base">
                  {loanAmount.toLocaleString()}
                </strong>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Տարեկան տոկոսադրույք</span>
                <strong className="text-slate-800 font-extrabold text-base">
                  {loanRate}%
                </strong>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Վարկի ժամկետը</span>
                <strong className="text-slate-800 font-extrabold text-base">
                  {loanTerm}
                </strong>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Ողջ վճարումը</span>
                <strong className="text-slate-800 font-extrabold text-base">
                  {loanResults.totalPay.toFixed(2)}
                </strong>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-600">
                    <th className="p-3 text-left font-bold">Ամիս</th>
                    <th className="p-3 text-right font-bold">Վճարվելիք տոկոսագումար</th>
                    <th className="p-3 text-right font-bold">Վարկի մասնակի մարում</th>
                    <th className="p-3 text-right font-bold">Վարկի ամսական վճար</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loanResults.schedule.map((row) => (
                    <tr key={row.month} className="hover:bg-slate-50 text-slate-800">
                      <td className="p-3 text-left font-bold">{row.month}</td>
                      <td className="p-3 text-right">{row.interest.toFixed(2)}</td>
                      <td className="p-3 text-right">{row.principal.toFixed(2)}</td>
                      <td className="p-3 text-right font-bold">{row.monthlyPayment.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="font-extrabold bg-slate-50 text-slate-900 border-t border-slate-200">
                    <td className="p-3 text-left">Ընդամենը</td>
                    <td className="p-3 text-right">{loanResults.totalInt.toFixed(2)}</td>
                    <td className="p-3 text-right">{loanResults.totalPrinc.toFixed(2)}</td>
                    <td className="p-3 text-right">{loanResults.totalPay.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}