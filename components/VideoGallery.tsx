"use client"

import { useState } from "react"
import { Play, Pause, Volume2 } from "lucide-react"
import Image from "next/image"

const yogaVideos = [
  {
    id: 1,
    title: "Méditation Guidée - 10 minutes",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format&q=80",
    duration: "10:32",
    views: "12.5K vues",
  },
  {
    id: 2,
    title: "Yoga du Matin - Salutation au Soleil",
    thumbnail: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop&auto=format&q=80",
    duration: "15:45",
    views: "8.2K vues",
  },
  {
    id: 3,
    title: "Respiration 4-7-8 pour Dormir",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format&q=80",
    duration: "8:20",
    views: "15.7K vues",
  },
  {
    id: 4,
    title: "Yoga Restaurateur - Détente Profonde",
    thumbnail: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop&auto=format&q=80",
    duration: "20:15",
    views: "6.8K vues",
  },
]

export default function VideoGallery() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Vidéos de Méditation & Yoga</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos séances guidées en vidéo pour approfondir votre pratique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {yogaVideos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />

                {/* Overlay avec bouton play */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setPlayingVideo(playingVideo === video.id ? null : video.id)}
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 transform hover:scale-110 transition-all"
                  >
                    {playingVideo === video.id ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </button>
                </div>

                {/* Durée */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{video.views}</span>
                  <Volume2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
