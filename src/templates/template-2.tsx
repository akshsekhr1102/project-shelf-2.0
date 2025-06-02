import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Template2Props {
  name: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  projects: {
    title: string;
    image: string;
  }[];
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    testimonial: string;
  }[];
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
    github?: string;
  };
}

export default function Template2({
  name,
  role,
  location,
  email,
  bio,
  projects,
  services,
  testimonials,
}: Template2Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="absolute top-8 right-8 w-4 h-4 bg-red-500 rounded-full"></div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              {name}
              <span className="text-red-500">.</span>
              <br />
              {role}
              <span className="text-red-500">.</span>
            </h1>
            <p className="text-xl mb-12 text-gray-300">{bio}</p>
            <div className="w-8 h-8 mx-auto">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-red-500"
              >
                <path
                  d="M12 5v14m-7-7l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Organic shape divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
            <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* My Work Section */}
      <section className="bg-white py-20 relative">
        <div className="absolute top-0 right-0 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="20" cy="20" r="8" fill="black" />
            <circle cx="20" cy="50" r="12" fill="black" />
            <circle cx="20" cy="80" r="6" fill="black" />
          </svg>
        </div>

        <div className="container mx-auto px-6">
          <div className="bg-black text-white p-4 inline-block mb-8">
            <h2 className="text-lg font-bold">MY WORK</h2>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-4xl">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="relative overflow-hidden group cursor-pointer"
              >
                <div className="aspect-square bg-gray-800 relative">
                  <Image
                    src={project.image || "/logo.png"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                    {index + 1}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs uppercase tracking-wide">
                      PROJECT
                    </div>
                    <div className="font-bold text-lg">{project.title}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Organic shape divider */}
        <div className="relative mt-20">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-black">
            <path d="M0,60 C300,0 600,120 900,60 C1050,30 1150,90 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">ABOUT</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Based in {location}, I specialize in creating exceptional
                digital experiences.
                {bio}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 text-sm">
              {services.map((service, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="text-gray-400">{service.description}</div>
                    <div className="text-red-500">Learn More →</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">SERVICES</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I provide comprehensive solutions tailored to your needs.
                Let&apos;s create something amazing together.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold">
                {email}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-sm">
              {services.map((service, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="text-gray-400">{service.description}</div>
                  </div>
                  <div className="mt-6 text-white font-bold">FROM $500</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Organic shape divider */}
        <div className="relative mt-20">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
            <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Feedback Section */}
      {testimonials.length > 0 && (
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-black">FEEDBACK</h2>
              <div className="flex gap-2">
                {testimonials.slice(0, 2).map((_, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-black text-white p-6 border-l-4 border-red-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        &quot;{testimonial.testimonial}&quot;
                      </p>
                      <div className="text-sm">
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-red-500">★★★★★</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Get In Touch Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Email or call</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Based in {location}, I&apos;m always interested in new projects
                and collaborations. Whether you need a complete brand overhaul
                or just a simple website refresh, I&apos;ve got you covered.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">{bio}</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">GET IN TOUCH</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                />
                <Input
                  placeholder="Phone"
                  className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                />
                <Textarea
                  placeholder="Message"
                  rows={4}
                  className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                />
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
