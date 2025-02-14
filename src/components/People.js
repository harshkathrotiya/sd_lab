export default function People() {
  const people = [
    {
      name: 'Dr. John Smith',
      role: 'Lab Director',
      image: 'https://placekitten.com/200/200', // Placeholder image
      description: 'Expert in distributed systems and cloud computing.',
      email: 'john.smith@lab.com'
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Senior Researcher',
      image: 'https://placekitten.com/201/201',
      description: 'Specializes in machine learning and AI systems.',
      email: 'sarah.j@lab.com'
    },
    {
      name: 'Mike Wilson',
      role: 'PhD Student',
      image: 'https://placekitten.com/202/202',
      description: 'Researching distributed algorithms.',
      email: 'mike.w@lab.com'
    },
    // Add more people here
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {people.map((person) => (
          <div 
            key={person.name} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img 
              src={person.image} 
              alt={`Image of ${person.name}`} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
              <p className="text-blue-600 mb-2">{person.role}</p>
              <p className="text-gray-600 mb-4">{person.description}</p>
              <a 
                href={`mailto:${person.email}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {person.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}