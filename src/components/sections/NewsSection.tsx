import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsUpdates } from '../../data/homeData';

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase">LATEST NEWS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings at Eagles Cricket Club.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {newsUpdates.map((news, index) => (
            <div key={index} className="card p-6">
              <div className="text-sm text-gray-600 mb-3">{news.date}</div>
              <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <Link to="/news" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Read More
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;