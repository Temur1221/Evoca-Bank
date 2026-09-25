import React, { useState } from 'react';

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'support', text: 'Բարև ձեզ 👋 Ինչպե՞ս կարող ենք օգնել ձեզ այսօր։' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  
  const [showIdentificationForm, setShowIdentificationForm] = useState(false);
  const [isIdentified, setIsIdentified] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  // Զանգահարելու մենյուի բաց/փակ վիճակը
  const [showCallMenu, setShowCallMenu] = useState(false);

  const emojiList = [
    '😇', '🦄', '😕', '😈',
    '😞', '😘', '😋', '😢',
    '😩', '😁', '😆', '😉',
    '😎', '😐', '😜', '😮',
    '👍', '👎', '😀', '🎉'
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    if (!isIdentified) {
      setShowIdentificationForm(true);
      return;
    }

    setMessages([...messages, { sender: 'user', text: inputMessage }]);
    setInputMessage('');
  };

  const handleStartChat = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Խնդրում ենք լրացնել բոլոր դաշտերը');
      return;
    }
    setIsIdentified(true);
    setShowIdentificationForm(false);
    
    setMessages(prev => [...prev, { sender: 'user', text: inputMessage }]);
    setInputMessage('');
  };

  const addEmoji = (emoji) => {
    setInputMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Բացվող չատի պատուհանը */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-[500px] relative">
          
          {/* Վերնագիր */}
          <div className="bg-[#6200EE] text-white p-5 relative overflow-hidden flex-shrink-0">
            <button 
              onClick={() => {
                setIsOpen(false);
                setShowIdentificationForm(false);
                setShowEmojiPicker(false);
              }}
              className="absolute top-4 left-4 w-7 h-7 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center text-xs transition cursor-pointer"
            >
              ✕
            </button>

            <div className="pl-10">
              <h3 className="font-extrabold text-sm sm:text-base tracking-wide leading-snug">
                {showIdentificationForm 
                  ? 'Նշեք Ձեր անունը և ուղարկեք հաղորդագրություն:' 
                  : 'Օնլայն խորհրդատուներ'}
              </h3>
              <p className="text-[11px] text-purple-200 mt-0.5">
                {showIdentificationForm ? 'Առանց գրանցվելու' : 'Evocabank Աջակցություն'}
              </p>
            </div>

            <div className="absolute top-0 right-0 w-12 h-12 bg-green-500 rounded-bl-full pointer-events-none"></div>
          </div>

          {/* Emoji ընտրելու պատուհանը */}
          {showEmojiPicker && (
            <div className="absolute bottom-16 left-4 right-4 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 z-20 grid grid-cols-4 gap-3 bg-opacity-95 backdrop-blur-sm">
              {emojiList.map((emoji, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => addEmoji(emoji)}
                  className="text-2xl hover:scale-125 transition transform p-2 flex items-center justify-center cursor-pointer"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}

          {/* Տվյալների լրացման ձևը կամ չատը */}
          {showIdentificationForm ? (
            <form onSubmit={handleStartChat} className="p-5 flex-grow overflow-y-auto flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div>
                  <input 
                    type="text"
                    placeholder="Ձեր անունը*"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pb-1 text-xs text-gray-800 border-b border-gray-300 focus:outline-none focus:border-[#6200EE] placeholder-gray-400 bg-transparent"
                  />
                </div>

                <div>
                  <input 
                    type="email"
                    placeholder="Ձեր էլ. հասցեն*"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pb-1 text-xs text-gray-800 border-b border-gray-300 focus:outline-none focus:border-[#6200EE] placeholder-gray-400 bg-transparent"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">Ձեր հեռախոսահամարը*</label>
                  <div className="flex items-center border-b border-gray-300 pb-1 space-x-2">
                    <span className="text-xs">🇦🇲</span>
                    <span className="text-xs text-gray-600 font-medium">+374</span>
                    <input 
                      type="tel"
                      placeholder="00 000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full text-xs text-gray-800 focus:outline-none placeholder-gray-400 bg-transparent"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-xl">
                  <span className="text-[10px] text-gray-400 block">Ձեր հաղորդագրությունը՝</span>
                  <p className="text-xs text-gray-800 mt-1">{inputMessage}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button 
                  type="button"
                  onClick={() => setShowIdentificationForm(false)}
                  className="w-1/3 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Հետ
                </button>
                <button 
                  type="submit"
                  className="w-2/3 py-3 bg-[#607286] hover:bg-[#4f5f70] text-white text-xs font-bold rounded-xl transition cursor-pointer shadow-md"
                >
                  Սկսել զրույցը
                </button>
              </div>
            </form>
          ) : (
            <div className="flex-grow flex flex-col justify-between p-4 bg-white">
              <div className="space-y-3 overflow-y-auto flex-grow pr-1">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-2xl text-xs max-w-[80%] ${
                      msg.sender === 'user' 
                        ? 'bg-[#6200EE] text-white ml-auto rounded-br-none' 
                        : 'bg-purple-50 text-gray-800 mr-auto rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="pt-3 border-t border-gray-100 flex items-center space-x-2 relative">
                <button 
                  type="button" 
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="text-gray-400 hover:text-[#6200EE] p-2 cursor-pointer transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>

                <input 
                  type="text" 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Մուտքագրեք հաղորդագրությունը" 
                  className="flex-grow px-3 py-2 text-xs text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6200EE]"
                />

                <button type="submit" className="w-9 h-9 bg-[#6200EE] text-white rounded-full flex items-center justify-center transition cursor-pointer">
                  <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          )}

        </div>
      )}

      {/* Հիմնական լողացող կոճակներ */}
      <div className="flex flex-col items-end space-y-3">
        
        {/* Զանգահարելու բացվող ընտրացանկը (Viber, WhatsApp, Telegram, Email) */}
        {showCallMenu && (
          <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col items-center space-y-3 mb-1 border border-gray-100 animate-fadeIn transition-all">
            {/* Viber */}
            <a 
              href="viber://chat?number=%2B37400000000" 
              className="w-10 h-10 bg-gray-900 hover:bg-black text-white rounded-full flex items-center justify-center transition shadow-md"
              title="Viber"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.5 2.5a18.3 18.3 0 0 0-5.4-.8A18.8 18.8 0 0 0 2.5 19.5c0 1.9.4 3.7 1.2 5.4l-1.3 4.8 5-1.3a18.4 18.4 0 0 0 5.4 1.2c10.4 0 18.9-8.5 18.9-18.9 0-1.8-.3-3.6-.9-5.4zm-4.7 14.3c-.3.8-1 1.3-1.8 1.4-.7.1-1.5 0-2.2-.3-1.6-.7-3.3-2-4.5-3.3-1.3-1.2-2.6-2.9-3.3-4.5-.3-.7-.4-1.5-.3-2.2.1-.8.6-1.5 1.4-1.8.4-.2.8-.2 1.2 0l1.2.6c.4.2.7.6.8 1l.4 1.4c.2.6 0 1.3-.5 1.7l-.7.7c-.2.2-.2.5 0 .7.7 1.2 1.7 2.2 2.9 2.9.2.2.5.2.7 0l.7-.7c.4-.5 1.1-.7 1.7-.5l1.4.4c.4.1.8.4 1 1l.6 1.2c.2.4.2.8 0 1.2z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/37400000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-900 hover:bg-black text-white rounded-full flex items-center justify-center transition shadow-md"
              title="WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 1 .9-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.2.2-.3.2-.5.1-.8-.4-1.6-.9-2.3-1.6-.6-.6-1.1-1.4-1.5-2.2-.1-.2 0-.4.1-.5l.3-.3c.1-.1.2-.3.3-.4.1-.1.2-.2.3-.4.1-.2 0-.3 0-.4-.1-.1-.5-1.2-.7-1.7-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.4.2 1.9.1.6-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z"/>
              </svg>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-900 hover:bg-black text-white rounded-full flex items-center justify-center transition shadow-md"
              title="Telegram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M21.5 3.5c-.3-.3-.8-.4-1.2-.2L2.8 10.5c-.7.3-.7 1.2 0 1.5l4.5 1.7 1.7 5.5c.2.6.9.9 1.5.5l2.4-1.9 4.3 3.2c.4.3 1 .1 1.2-.4l3.5-16c.2-.6-.2-1.2-.8-1.5zM9.5 14.5l-1-3.5 10-6.5-9 10z"/>
              </svg>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@bank.am" 
              className="w-10 h-10 bg-gray-900 hover:bg-black text-white rounded-full flex items-center justify-center transition shadow-md"
              title="Email"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        )}

        {/* Զանգահարելու գլխավոր կոճակ */}
        <button 
          onClick={() => {
            setShowCallMenu(!showCallMenu);
            setIsOpen(false); // Փակում է չատը, եթե բաց է
          }}
          className="w-12 h-12 bg-purple-200 hover:bg-purple-300 text-[#6200EE] rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-105 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>

        {/* Գրեք մեզ կոճակ */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowCallMenu(false); // Փակում է զանգերի մենյուն, եթե բաց է
            setShowEmojiPicker(false);
          }}
          className="group relative flex items-center bg-[#6200EE] hover:bg-[#5000cc] text-white text-xs font-bold py-3 px-5 rounded-full shadow-xl transition-all transform hover:scale-105 cursor-pointer"
        >
          <span>Գրեք մեզ, մենք օնլայն ենք !</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"></span>
        </button>
      </div>

    </div>
  );
}