const VisionSection = () => {
    return (
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 uppercase">OUR VISION</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                To be the leading cricket club that nurtures talent, promotes sportsmanship, and creates champions who inspire the next generation of cricketers.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-blue-600 uppercase">Excellence</h3>
                  <p className="text-gray-600">Striving for the highest standards in cricket and personal development</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-blue-600 uppercase">Community</h3>
                  <p className="text-gray-600">Building a strong cricket family that supports and uplifts each other</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-blue-600 uppercase">Development</h3>
                  <p className="text-gray-600">Continuous learning and growth for players of all levels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default VisionSection;