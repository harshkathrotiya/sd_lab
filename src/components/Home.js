export default function Home() {
    return (
      <div>
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" aria-label="System Design Lab">
              System Design Lab
            </h1>
            <p className="text-xl text-gray-300 mb-8" role="description">
              Advancing Research in System Design and Engineering
            </p>
          </div>
        </section>
  
        <section className="p   y-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Research Areas",
                  description: "Explore our current research projects and focus areas",
                  icon: "🔬"
                },
                {
                  title: "Publications",
                  description: "View our latest research publications and papers",
                  icon: "📚"
                },
                {
                  title: "People",
                  description: "Meet our faculty, students, and researchers",
                  icon: "👥"
                }
              ].map((item) => (
                <div 
                  key={item.title} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  aria-label={item.title}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
