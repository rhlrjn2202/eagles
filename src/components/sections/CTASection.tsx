import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 uppercase">
          READY TO JOIN EAGLES CRICKET CLUB?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Be part of our cricket family and start your journey towards excellence.
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
        >
          Register Now
          <ExternalLink className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;