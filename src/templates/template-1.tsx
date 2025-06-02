import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Twitter, Dribbble, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface Template1Props {
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

export default function Template1({
  name,
  role,
  location,
  email,
  bio,
  projects,
  services,
  testimonials,
  socialLinks,
}: Template1Props) {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="text-2xl font-bold text-gray-900">{name}</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="text-gray-700 hover:text-gray-900">
            Projects
          </a>
          <a href="#services" className="text-gray-700 hover:text-gray-900">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">
            About Me
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-gray-900">
            Testimonials
          </a>
          <a
            href={`mailto:${email}`}
            className="text-gray-700 hover:text-gray-900"
          >
            {email}
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-6 md:mx-12 mb-16">
        <div className="bg-[#e8d5f0] rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {role}
            <br />
            based in {location}
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full">
              {email}
            </Button>
            <Button
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full"
            >
              View My Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-12 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src={project.image || "/logo.png"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      {services.length > 0 && (
        <section id="services" className="px-6 md:px-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={cn(
                  "rounded-2xl border-0",
                  index === 0 && "bg-[#d4f4dd]",
                  index === 1 && "bg-[#e8d5f0]",
                  index === 2 && "bg-[#fff2a8]"
                )}
              >
                <CardContent className="p-8">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-lg mb-4 flex items-center justify-center",
                      index === 0 && "bg-green-600",
                      index === 1 && "bg-purple-600",
                      index === 2 && "bg-yellow-600"
                    )}
                  >
                    <span className="text-white text-xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section id="testimonials" className="px-6 md:px-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            What Customers Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            The greatest satisfaction is when my clients are happy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={cn(
                  "rounded-2xl border-0",
                  index === 0 && "bg-gray-900",
                  index === 1 && "bg-[#e8d5f0]",
                  index === 2 && "bg-[#fff2a8]"
                )}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-900 font-bold">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                  <p
                    className={cn(
                      "text-sm leading-relaxed",
                      index === 0 ? "text-white" : "text-gray-900"
                    )}
                  >
                    &quot;{testimonial.testimonial}&quot;
                  </p>
                  <p
                    className={cn(
                      "text-xs mt-4",
                      index === 0 ? "text-gray-400" : "text-gray-600"
                    )}
                  >
                    - {testimonial.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Social Links */}
      {Object.keys(socialLinks).length > 0 && (
        <section className="px-6 md:px-12 mb-16">
          <div className="flex justify-center gap-6">
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Instagram className="w-6 h-6" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Twitter className="w-6 h-6" />
              </a>
            )}
            {socialLinks.dribbble && (
              <a
                href={socialLinks.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Dribbble className="w-6 h-6" />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="mx-6 md:mx-12 mb-16">
        <div className="bg-[#fff2a8] rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Together, we&apos;ll create something extraordinary that leaves a
            lasting impact. Contact me today and let&apos;s embark on creating
            journey of collaboration and success.
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full">
            {email}
          </Button>
        </div>
      </section>
    </div>
  );
}
