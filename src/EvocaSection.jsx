import { useEffect, useState } from "react";
import { db } from "./firebase.js"; 
import { collection, getDocs } from "firebase/firestore";

export default function EvocaSection() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Evoca Cards"));
        const fetchedCards = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        fetchedCards.sort((a, b) => (a.order || 0) - (b.order || 0));
        setCards(fetchedCards);
      } catch (error) {
        console.error("Firebase fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 w-full items-center justify-center bg-[#6200EE] text-white">
        Տվյալները բեռնվում են...
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-8 px-4">
      <section className="relative mx-auto min-h-[520px] w-full max-w-[1300px] overflow-hidden rounded-t-[60px] rounded-b-[60px] bg-[#6200EE] px-8 py-12 text-white shadow-2xl md:rounded-tl-[80px] md:rounded-br-[80px]">
        
        <div className="pointer-events-none absolute -left-10 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -left-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-purple-700/30 blur-2xl" />

        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 lg:flex-row lg:items-center">
          
          <div className="flex w-full max-w-[320px] justify-center lg:justify-start">
            <div className="relative h-[320px] w-full">
              <img
                src="https://www.evoca.am/img/statue-1.png"
                alt="Evocabank Statue"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="flex w-full max-w-[760px] flex-col items-start gap-6">
            
            <h2 className="text-2xl font-bold md:text-3xl">
              Լավագույնը Evocabank-ից
            </h2>

            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
              {cards.length === 0 ? (
                <div className="col-span-2 text-center text-lg text-white/80">
                  Քարտեր չեն գտնվել:
                </div>
              ) : (
                cards.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col justify-between rounded-2xl bg-white p-6 text-[#171717] shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <span className="inline-block rounded-full bg-[#F3E8FF] px-3 py-1 text-[11px] font-semibold text-[#6200EE]">
                        {card.tag}
                      </span>

                      <h3 className="mt-3 text-lg font-bold leading-snug text-[#171717]">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-gray-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}