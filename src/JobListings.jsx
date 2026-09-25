import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 20;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'jobsList'));
        const jobsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setJobs(jobsData);
      } catch (error) {
        console.error("Սխալ վականսիաները բեռնելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Փեջինացիայի հաշվարկ
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Վերնագիր և քանակ */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Բաց մի թող քո նոր հնարավորությունը
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            {jobs.length} աշխատատեղ
          </p>
        </div>

        {/* Վականսիաների ցանկ */}
        {loading ? (
          <p className="text-gray-500 text-center py-10">Բեռնվում է...</p>
        ) : jobs.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <p className="text-gray-600 text-lg">Այս պահին ակտիվ վականսիաներ չկան։</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {currentJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                  {/* Ձախ մաս */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                      {job.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-xs sm:text-sm text-gray-600">
                      <div>
                        <span className="text-gray-400 block mb-0.5">Փաստաթղթերի ներկայացման վերջնաժամկետ</span>
                        <span className="font-semibold text-gray-800">{job.deadline || 'Անժամկետ'}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block mb-0.5">Աշխատանքի վայր</span>
                        <span className="font-semibold text-gray-800">{job.location || 'Երևան'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Աջ մաս՝ Կոճակ */}
                  <div className="w-full md:w-auto flex justify-end">
                    <button className="w-full md:w-auto bg-[#6200EE] hover:bg-[#5000cc] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-md text-center">
                      Դիտել մանրամասն և դիմել
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Էջավորում (Pagination) */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2 mt-10">
                {/* Նախորդ էջ */}
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  &lt;
                </button>

                {/* Էջերի համարներ (1 և 2) */}
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg font-bold text-sm transition ${
                      currentPage === i + 1 
                        ? 'bg-[#6200EE] text-white shadow-md' 
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                {/* Հաջորդ էջ */}
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  &gt;
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}