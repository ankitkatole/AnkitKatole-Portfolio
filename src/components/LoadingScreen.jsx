import { useState, useEffect } from "react"

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState("")

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return ""
        return prev + "."
      })
    }, 500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(dotsInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      {/* Floating doodle elements */}
      <div className="absolute top-20 left-20 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>✨</div>
      <div className="absolute top-32 right-32 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</div>
      <div className="absolute bottom-32 left-32 text-5xl animate-bounce" style={{ animationDelay: '1s' }}>💫</div>
      <div className="absolute bottom-20 right-20 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>⭐</div>
      
      {/* Paper plane animation */}
      <div className="relative">
        <div className="text-8xl animate-pulse">✈️</div>
        <div className="absolute -top-4 -right-4 text-2xl animate-spin">🌀</div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-40 text-center">
        <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-300 mb-4">
          Loading{dots}
        </h2>
        <div className="w-64 h-2 bg-purple-200 dark:bg-purple-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-purple-500 dark:text-purple-400 mt-2">
          {progress}% Complete
        </p>
      </div>
      
      {/* Doodle decorations */}
      <div className="absolute top-10 right-10 text-3xl animate-pulse">🎨</div>
      <div className="absolute bottom-10 left-10 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>🖌️</div>
    </div>
  )
}

export default LoadingScreen
