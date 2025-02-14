export default function Events() {
  const events = [
    {
      title: 'System Design Workshop',
      date: 'March 15, 2024',
      description: 'A hands-on workshop on modern system design principles.'
    },
    {
      title: 'Research Symposium',
      date: 'April 20, 2024',
      description: 'Annual symposium showcasing latest research developments.'
    },
    {
      title: 'Industry Connect',
      date: 'May 5, 2024',
      description: 'Networking event with industry partners and stakeholders.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.title} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-2">{event.date}</p>
            <p className="text-gray-500">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}