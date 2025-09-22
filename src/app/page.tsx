export default function Home() {
  const colorFamilies = [
    { name: 'Gray', colors: [
      'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 
      'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900', 'bg-gray-950'
    ]},
    { name: 'Red', colors: [
      'bg-red-50', 'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 
      'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900', 'bg-red-950'
    ]},
    { name: 'Orange', colors: [
      'bg-orange-50', 'bg-orange-100', 'bg-orange-200', 'bg-orange-300', 'bg-orange-400', 
      'bg-orange-500', 'bg-orange-600', 'bg-orange-700', 'bg-orange-800', 'bg-orange-900', 'bg-orange-950'
    ]},
    { name: 'Yellow', colors: [
      'bg-yellow-50', 'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400', 
      'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800', 'bg-yellow-900', 'bg-yellow-950'
    ]},
    { name: 'Emerald', colors: [
      'bg-emerald-50', 'bg-emerald-100', 'bg-emerald-200', 'bg-emerald-300', 'bg-emerald-400', 
      'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-700', 'bg-emerald-800', 'bg-emerald-900', 'bg-emerald-950'
    ]},
    { name: 'Blue', colors: [
      'bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 
      'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900', 'bg-blue-950'
    ]},
    { name: 'Violet', colors: [
      'bg-violet-50', 'bg-violet-100', 'bg-violet-200', 'bg-violet-300', 'bg-violet-400', 
      'bg-violet-500', 'bg-violet-600', 'bg-violet-700', 'bg-violet-800', 'bg-violet-900', 'bg-violet-950'
    ]}
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
