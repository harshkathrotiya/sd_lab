export default function Research() {
  const researchAreas = [
    {
      title: 'Distributed Systems',
      description: 'Research on scalable and reliable distributed systems.',
      projects: [
        'Cloud-Native Architecture',
        'Distributed Consensus Algorithms',
        'Fault Tolerance Systems'
      ],
      icon: '🌐',
      image: 'https://example.com/distributed-systems.jpg' // Added image link
    },
    {
      title: 'Artificial Intelligence',
      description: 'Advanced AI systems and applications.',
      projects: [
        'Machine Learning Models',
        'Neural Networks',
        'AI Ethics'
      ],
      icon: '🤖',
      image: 'https://example.com/artificial-intelligence.jpg' // Added image link
    },
    {
      title: 'Cybersecurity',
      description: 'Security research for modern systems.',
      projects: [
        'Threat Detection',
        'Security Protocols',
        'Privacy Preservation'
      ],
      icon: '🔒',
      image: 'https://example.com/cybersecurity.jpg' // Added image link
    },
    {
      title: 'IoT Systems',
      description: 'Internet of Things and embedded systems research.',
      projects: [
        'Sensor Networks',
        'Edge Computing',
        'IoT Security'
      ],
      icon: '📱',
      image: 'https://example.com/iot-systems.jpg' // Added image link
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {researchAreas.map((area) => (
          <div key={area.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">{area.icon}</div>
            <img src={area.image} alt={`Image representing ${area.title}`} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
            <p className="text-gray-600 mb-4">{area.description}</p>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900" role="heading">Current Projects:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {area.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
