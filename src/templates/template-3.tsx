import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  ArrowRight,
  Instagram,
  Dribbble,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

interface Template3Props {
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

export default function Template3({
  name,
  role,
  location,
  email,
  bio,
  projects,
  services,
  testimonials,
  socialLinks,
}: Template3Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">{name.split(" ")[0]}</div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a href="#work" className="hover:text-purple-400 transition-colors">
              Work
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                I&apos;m {name}
                <br />
                <span className="text-purple-400">A {role}</span>
                <br />
                <span className="text-gray-400 text-3xl md:text-4xl">
                  based in {location}.
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-md">{bio}</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
                {email}
              </Button>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>
                <Image
                  src={projects[0]?.image || "/placeholder.svg"}
                  alt={name}
                  width={320}
                  height={320}
                  className="relative z-10 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {services.length > 0 && (
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12">
              Services I
              <br />
              Provide
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white/5 border-white/10 p-8">
                  <CardContent className="p-0">
                    <div className="text-6xl font-bold text-purple-400 mb-4">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Philosophy &<br />
                values
              </h2>
              <p className="text-gray-300 text-lg mb-6">{bio}</p>
              <p className="text-gray-300 text-lg">
                Based in {location}, I combine creativity and technical
                expertise to deliver exceptional results that exceed
                expectations.
              </p>
            </div>
            <div className="relative">
              <Image
                src={projects[1]?.image || "/placeholder.svg"}
                alt="Philosophy"
                width={400}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image
                    src={project.image || "/logo.png"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-purple-400">
                    <span>View Project</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 px-6 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/5 border-white/10 p-8">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Star className="text-purple-400 h-5 w-5" />
                      <Star className="text-purple-400 h-5 w-5" />
                      <Star className="text-purple-400 h-5 w-5" />
                      <Star className="text-purple-400 h-5 w-5" />
                      <Star className="text-purple-400 h-5 w-5" />
                    </div>
                    <p className="text-gray-300 mb-6">
                      &quot;{testimonial.testimonial}&quot;
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Let&apos;s work together
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                I&apos;m always interested in new projects and collaborations.
                Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-400 mr-3" />
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-300 hover:text-purple-400"
                  >
                    {email}
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">{location}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Social Links</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                )}
                {socialLinks.dribbble && (
                  <a
                    href={socialLinks.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors"
                  >
                    <Dribbble className="h-6 w-6" />
                  </a>
                )}
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
