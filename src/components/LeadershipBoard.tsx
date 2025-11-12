import amirImage from "../../assets/Amir.png";
import aslahImage from "../../assets/Aslah.png";
import mridhulImage from "../../assets/Mridhul.png";
import suhailImage from "../../assets/Suhail.png";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Amir",
      title: "Founder & Chief Visionary Officer",
      description:
        "With 15 years of corporate leadership and entrepreneurial experience, Amir drives strategy and innovation at Edges+. Expertise spans business growth, digital transformation, and long-term vision building, with a proven track record of steering organizations toward sustainable success.",
      image: amirImage,
    },
    {
      name: "Muhammed Aslah",
      title: "Chief Technology Officer",
      description:
        "MCA graduate specializing in AI development and data architecture, driving technological excellence and innovation at Edges+. Expertise includes scalable system design, advanced data modeling, and cutting-edge AI solutions, ensuring seamless integration of technology with business objectives.",
      image: aslahImage,
    },
    {
      name: "Mridhul C",
      title: "Project Manager",
      description:
        "Expert in R language, business analytics, and UI/UX design, dedicated to delivering high-impact, data-centric ERP solutions with seamless user experiences. Skilled in transforming complex business requirements into intuitive digital platforms, ensuring efficiency, scalability, and measurable results.",
      image: mridhulImage,
    },
    {
      name: "Suhail Anvar Sadath",
      title: "Project Manager",
      description:
        "AI development specialist focused on automation and business process optimization, building intelligent systems that streamline workflows and enhance organizational efficiency. Expertise spans machine learning, predictive analytics, and process innovation, enabling businesses to scale with agility and precision.",
      image: suhailImage,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12"
          >
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-black-400/20 to-black-600/20">
                <img
                  src={leader.image}
                  alt={`${leader.name} - ${leader.title}`}
                  className="w-auto h-auto max-w-xs md:max-w-sm object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.className =
                      "w-40 h-40 bg-gradient-to-br from-black-400/20 to-black-600/20 flex items-center justify-center rounded-full";
                    fallback.innerHTML = `
                      <span class="text-3xl font-bold text-primary">${leader.name.charAt(
                        0
                      )}</span>
                    `;
                    e.currentTarget.parentElement?.appendChild(fallback);
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 mb-4">
                {leader.name}
              </h3>

              <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                {leader.title}
              </h4>

              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {leader.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
