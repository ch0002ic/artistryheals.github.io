
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./css/community.css";


const Community: React.FC = () => {
  return (
    <div className="bg-[var(--beige)] min-h-screen flex flex-col items-center relative">
      
      <Navbar />

      <main className="flex-grow flex flex-col justify-center items-center w-full mainDiv h-[93vh]">
        {/* <h1 className="text-7xl font-extrabold text-center text-white mb-5 font-league-spartan">Community Hub</h1>
        <p className="text-center text-gray-200 mb-6 text-2xl font-open-sans">Connect with others, share experiences, and grow together</p> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 w-full h-[93vh]">
          {[
            { title: "Individuals", description: "Express your emotions, join discussions, and find support from others.", link: "/individuals", button: "Join the Conversation", color:"var(--pink)", bgImage: 'chan.jpeg' },
            { title: "Trainers", description: "Lead sessions, share insights, and help others on their expressive journey.", link: "/trainers", button: "Start a Session", color:"var(--green)", bgImage: 'artistryheals_drawing.jpeg' },
            { title: "HR", description: "Enhance employee well-being, organize workshops, and support mental health.", link: "/hr", button: "Get Involved", color:"var(--blue)", bgImage: 'artistryheals_group_photo.jpeg' }
          ].map((section, index) => (
              <div 
                key={index} 
                className="column p-6 lg:h-[93vh] h-[100%] transition-transform duration-300 transform hover:scale-105 hover:bg-opacity-100 transition-all cursor-pointer flex flex-col justify-center items-center bg-opacity-20" 
                style={{ 
                  backgroundImage: `url(${section.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  backgroundBlendMode: "overlay"
                }}
                onClick={() => {
                  window.location.href = section.link;
                }}
              >
                <h2 className="text-5xl font-bold text-white mb-1 font-league-spartan" style={{color: section.color}}>{section.title}</h2>
                <p className="text-gray-200 mb-4 font-bold text-xl font-open-sans opacity-100 text-center h-20">{section.description}</p>
                <a href={section.link} className="go-link py-3 hover:scale-105 transition-all px-6 rounded-full bg-custom text-white font-bold transition-colors duration-200" style={{backgroundColor: section.color}}>
                  {section.button}
                </a>
              </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;