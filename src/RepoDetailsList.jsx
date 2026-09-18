import React from 'react';

export default function RepoDetailsList({ detailsData }) {
  // Դասավորում ենք ըստ order դաշտի (եթե առկա է)
  const sortedDetails = Array.isArray(detailsData) 
    ? [...detailsData].sort((a, b) => (a.order || 0) - (b.order || 0))
    : [];

  return (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      {sortedDetails.length > 0 ? (
        sortedDetails.map((item) => (
          <p key={item.id} className="text-base sm:text-lg">
            {item.text}
          </p>
        ))
      ) : (
        <div className="text-center py-6 text-gray-400">Տվյալներ չկան</div>
      )}
    </div>
  );
}