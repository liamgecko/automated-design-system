export default function Home() {
  const colorFamilies = [
    { name: 'Gray', colors: [
      'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 
      'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900', 'bg-gray-950'
    ]},
  ];

  const shadeNumbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-8 text-center">Color Palette</h1>
        
        <div className="bg-gray-900 rounded-lg p-6">
          {/* Header row with shade numbers */}
          <div className="grid grid-cols-12 gap-2 mb-4">
            <div className="col-span-1"></div> {/* Empty space for color names */}
            {shadeNumbers.map((shade) => (
              <div key={shade} className="text-center text-white text-sm font-medium">
                {shade}
              </div>
            ))}
          </div>

          {/* Color rows */}
          {colorFamilies.map((family) => (
            <div key={family.name} className="grid grid-cols-12 gap-1.5 sm:gap-4 mb-4">
              {/* Color family name */}
              <div className="col-span-1 flex items-center">
                <span className="text-white text-sm font-medium">{family.name}</span>
              </div>
              
              {/* Color swatches */}
              {family.colors.map((colorClass, index) => (
                <div
                  key={`${family.name}-${shadeNumbers[index]}`}
                  className={`h-16 rounded-lg ${colorClass} border border-gray-700 hover:scale-105 transition-transform cursor-pointer`}
                  title={`${family.name} ${shadeNumbers[index]}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
