export default function Publications() {
  const publications = [
    {
      title: 'Advanced System Design Patterns in Distributed Computing',
      authors: ['Smith, J.', 'Johnson, S.', 'Wilson, M.'],
      journal: 'Journal of System Design',
      year: '2023',
      doi: '10.1234/jsd.2023.001',
      type: 'Journal Article'
    },
    {
      title: 'Machine Learning Applications in System Architecture',
      authors: ['Johnson, S.', 'Brown, R.'],
      conference: 'International Conference on System Design',
      year: '2023',
      location: 'San Francisco, CA',
      type: 'Conference Paper'
    },
    {
      title: 'Emerging Trends in Cloud Computing and Distributed Systems',
      authors: ['Wilson, M.', 'Smith, J.'],
      publisher: 'Tech Publications',
      year: '2022',
      isbn: '978-0-123456-78-9',
      type: 'Book Chapter'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications</h2>
      <div className="space-y-6">
        {publications.map((pub) => (
          <div key={pub.title} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-2">
                  {pub.authors.join(', ')}
                </p>
                <p className="text-gray-500">
                  {pub.journal || pub.conference || pub.publisher} ({pub.year})
                </p>
                {pub.doi && (
                  <a 
                    href={`https://doi.org/${pub.doi}`}
                    className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOI: {pub.doi}
                  </a>
                )}
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {pub.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}