import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, HeadsetIcon, Award, FileCheck, Timer, Code } from 'lucide-react'

const features = [
  {
    icon: Timer,
    title: "10% Penalty",
    description: "Enforcement",
    subtitle: "*If not Delivered on time"
  },
  {
    icon: HeadsetIcon,
    title: "1 to 1 Communication",
    description: "Dedicated Business Developer",
    subtitle: ""
  },
  {
    icon: Award,
    title: "Best Quality",
    description: "With native technologies",
    subtitle: ""
  },
  {
    icon: FileCheck,
    title: "Guaranteed",
    description: "Project Delivery",
    subtitle: ""
  },
  {
    icon: Code,
    title: "Copyrights & IPR",
    description: "Complete source code",
    subtitle: ""
  },
  {
    icon: Clock,
    title: "8+ Years of",
    description: "IT Experience",
    subtitle: ""
  }
]

export default function ChooseUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative">
            <img
              src="/upload/people-creating-social-media-landing-page_52683-38062.jpg"
              alt="Businessman with checklist"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-500">Why</span> Choose Us ?
            </h2>
            <p className="text-gray-700 text-sm">
              At Arramton, We Ensure the amazing blend of the human brain and tech innovation while creating the most adaptive keys in mobility for different business domains across the world.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                    <p className="text-gray-600 font-medium">{feature.description}</p>
                  </div>
                </div>
              </CardHeader>
              {feature.subtitle && (
                <CardContent>
                  <p className="text-sm text-red-600">{feature.subtitle}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}