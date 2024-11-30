import { AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  error?: Error | null;
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  const navigate = useNavigate();

  const getErrorMessage = () => {
    if (error?.message?.includes('502')) {
      return 'Our servers are currently unavailable. Please try again later.';
    }
    return 'Something went wrong. Please try again later.';
  };

  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="inline-block p-4 bg-red-100 rounded-full mb-6">
          <AlertCircle className="w-12 h-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h1>
        <p className="text-lg text-gray-600 mb-8">
          {getErrorMessage()}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRetry}
            className="btn-primary"
          >
            Try Again
          </button>
          <button
            onClick={handleGoHome}
            className="btn-secondary"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;