import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import "./css/about.css";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Zhang Yimei",
    role: "Co-Founder",
    image: "/yimei.jpeg",
  },
  {
    name: "Liang Jiaping",
    role: "Co-Founder",
    image: "/jiaping.jpeg",
  },
  {
    name: "Chan Ric",
    role: "Tech Developer",
    image: "/chan.jpeg",
  },
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <Navbar />

      <div className="mainDiv">
        <div className="grid">
          {/* Who We Are Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[var(--beige)]">
            <div className="flex flex-col px-4 md:px-6 lg:px-10 py-8 lg:py-16 items-start justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-left text-[var(--brown)] mb-4">
                Who we are
              </h2>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-left text-gray-700 leading-relaxed">
                Artistry Heals is an online platform for self-paced mindful art
                exercises to help schools and counselors visualize, understand,
                and release emotions through expressive journeys.
              </p>
            </div>
            <div className="relative aspect-square lg:aspect-auto">
              <img
                src="./artistryheals_group_photo.jpeg"
                alt="Team photo"
                className="w-full h-full object-cover dark-filter"
              />
            </div>
          </div>

          {/* Our Mission Section */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-[var(--blue)] opacity-0 transition-opacity duration-1000"
            ref={(el) => el && sectionsRef.current.push(el)}
          >
            <div className="lg:order-1 order-2 relative aspect-video lg:aspect-auto">
              <img
                src="./artistryheals_group_photo.jpeg"
                alt="Mission visual"
                className="w-full h-full object-cover dark-filter"
              />
            </div>
            <div className="flex flex-col px-4 md:px-6 lg:px-10 py-8 lg:py-16 items-end justify-center lg:col-span-2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-right text-white mb-4">
                Our Mission
              </h2>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-right text-gray-200 leading-relaxed">
                Artistry Heals seeks to empower individuals to express and
                manage their emotions through art. We aim to create a community
                where art is not just an activity but a journey of
                self-discovery and emotional growth.
              </p>
            </div>
          </div>

          {/* Our Values Section */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-[var(--beige)] opacity-0 transition-opacity duration-1000"
            ref={(el) => el && sectionsRef.current.push(el)}
          >
            <div className="flex flex-col px-4 md:px-6 lg:px-10 py-8 lg:py-16 lg:col-span-2 justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-left text-[var(--brown)] mb-4">
                Our Values
              </h2>
              <ul className="space-y-4 text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-700 lg:text-left text-center">
                <li>
                  <b>Creativity</b> - Encouraging artistic expression to explore
                  emotions.
                </li>
                <li>
                  <b>Empathy</b> - Prioritizing understanding and emotional
                  support.
                </li>
                <li>
                  <b>Inclusivity</b> - Creating a welcoming space for all.
                </li>
                <li>
                  <b>Growth</b> - Fostering continuous learning and emotional
                  development.
                </li>
              </ul>
            </div>
            <div className="relative aspect-square lg:aspect-auto">
              <img
                src="./artistryheals_group_photo.jpeg"
                alt="Values visual"
                className="w-full h-full object-cover dark-filter"
              />
            </div>
          </div>

          {/* Our Product Section */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[var(--green)] opacity-0 transition-opacity duration-1000"
            ref={(el) => el && sectionsRef.current.push(el)}
          >
            <div className="flex flex-col px-4 md:px-6 lg:px-10 py-8 lg:py-16 justify-center ">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-left text-white mb-4">
                Our Product
              </h2>
              <ul className="space-y-4 text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white lg:text-left text-center">
                <li>
                  <b>Young minds</b> - Art for self-awareness and social
                  connection.
                </li>
                <li>
                  <b>Families</b> - Art for family bonding.
                </li>
                <li>
                  <b>Couples</b> - Art for love.
                </li>
                <li>
                  <b>Aging</b> - Art for fulfilling retirement and mental
                  sharpness.
                </li>
              </ul>
            </div>
            <div className="relative aspect-square lg:aspect-auto">
              <img
                src="/artistryheals_drawing.jpeg"
                alt="Product example"
                className="w-full h-full object-cover dark-filter"
              />
            </div>
          </div>

          {/* Meet Our Team Section */}
          <div
            className="bg-[var(--beige)] py-12 px-4 md:px-6 lg:px-10 opacity-0 transition-opacity duration-1000"
            ref={(el) => el && sectionsRef.current.push(el)}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center text-[var(--brown)] mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer group"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-full shadow-lg mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#5b352e]">
                    {member.name}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Member Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-md w-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {selectedMember.name}
              </h3>
              <p className="text-lg md:text-xl mb-4">{selectedMember.role}</p>
              <button
                className="bg-[#ff66c4] text-white px-6 py-2 rounded-lg hover:bg-[#ff4eb4] transition-colors"
                onClick={() => setSelectedMember(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default About;