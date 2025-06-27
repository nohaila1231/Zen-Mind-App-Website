import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Aicha Benali",
    role: "Professeure, Casablanca",
    content:
      "Zen_Mind a transformé ma gestion du stress. Les exercices de respiration sont parfaits pour mes journées chargées à l'école. Je recommande vivement !",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    name: "Youssef Alami",
    role: "Entrepreneur, Rabat",
    content:
      "L'application m'aide à maintenir mon équilibre entre vie professionnelle et personnelle. Les séances de 5 minutes sont parfaites pour mes pauses !",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    name: "Fatima Zahra",
    role: "Maman de 3 enfants, Marrakech",
    content:
      "Grâce aux séances courtes, je trouve enfin du temps pour moi. Mes enfants adorent aussi les exercices de respiration ! Merci Nohaila !",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos utilisateurs marocains
          </h2>
          <p className="text-xl text-gray-600">Rejoignez plus de 25 000 marocains qui ont trouvé leur sérénité</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-violet-300 mb-4" />

                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
