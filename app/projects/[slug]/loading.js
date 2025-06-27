export default function Loading() {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-32 mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-96 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-full mb-6"></div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 bg-gray-200 rounded w-24"></div>
                <div className="h-10 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
            
            <div>
              <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
              <div className="flex gap-2 mb-6">
                <div className="h-8 bg-gray-200 rounded w-16"></div>
                <div className="h-8 bg-gray-200 rounded w-20"></div>
                <div className="h-8 bg-gray-200 rounded w-18"></div>
              </div>
            </div>
          </div>
          
          <div className="h-64 bg-gray-200 rounded-lg"></div>
        </div>
      </main>
    )
  }