import Navbar from "@/components/Navbar";

const exercises = [
  {
    category: "Feeling",
    title: "Emotion Wheel",
    time: "30mins",
    image: "https://i.postimg.cc/g2D7bx9C/screenshot-20240808-144457.png",
    url: "/emotionwheel",
  },
  {
    category: "Feeling",
    title: "Draw Your Breathing",
    time: "15mins",
    image: "https://i.postimg.cc/5NvcT92J/screenshot-20240808-144510.png",
  },
  {
    category: "Family",
    title: "Family Tree",
    time: "15mins",
    image: "https://i.postimg.cc/tJjdgzW2/screenshot-20240808-151405.png",
  },
  {
    category: "Self",
    title: "Self-Portrait",
    time: "30mins",
    image: "https://i.postimg.cc/qvXPBmKZ/screenshot-20240808-144601.png",
  },
  {
    category: "Social",
    title: "Friend",
    time: "30mins",
    image: "https://i.postimg.cc/9fmvDGtX/screenshot-20240808-144623.png",
  },
];

const categories = [
  {
    name: "Feeling",
    color: "#ffc7ce",
    title: "I Wanna Feel Better",
    description: "Coping with Stress and Anxiety<br/>Physical health",
    image: "https://i.postimg.cc/YS6zBYBk/screenshot-20240808-135954.png",
  },
  {
    name: "Self",
    color: "#849bff",
    title: "I Wanna Be Better Self",
    description: "self-esteem<br/>set personal goals<br/>strengths and aspirations",
    image: "https://i.postimg.cc/N0CPLZjb/screenshot-20240808-145415.png",
  },
  {
    name: "Family",
    color: "#ffe2ad",
    title: "I Love My Family",
    description: "family dynamics<br/>celebrate the positive aspects",
    image: "https://i.postimg.cc/1tg7FMgS/screenshot-20240808-145425.png",
  },
  {
    name: "Social",
    color: "#ff66c4",
    title: "I Love My Friends",
    description: "social interaction<br/>empathy",
    image: "https://i.postimg.cc/Xqd2HJcD/screenshot-20240808-145434.png",
  },
];

const Exercises = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center relative"
      style={{
        borderRadius: "2rem",
        backgroundImage: `url('https://i.postimg.cc/sDCHBY3F/screenshot-20240808-145620.png')`,
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f2e9e4",
      }}
    >

      <Navbar />

      {/* Exercises Gallery */}
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-[#5b352e] mb-4">Gallery of art exercises</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4 no-scrollbar">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="flex-none w-96 h-64 bg-white rounded-3xl shadow-md p-4 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${exercise.image})` }}
              onClick={() => {
                window.location.href = exercise.url || "#";
              }}
            >
              <p className="text-sm text-gray-800 ml-2">{exercise.category}</p>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <h3 className="text-lg font-semibold ml-2">{exercise.title}</h3>
                <p className="text-sm text-gray-800">{exercise.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sorted by Needs */}
        <div className="flex items-center mt-6 mb-12">
          <h2 className="text-2xl font-bold text-[#5b352e]">Sorted by needs</h2>
          <div className="relative ml-4">
            <input type="text" className="pl-10 pr-4 py-1 border-2 border-black rounded-xl bg-transparent" />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md flex flex-col items-center relative pt-4 border-4"
              style={{ borderColor: category.color }}
            >
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full px-16 text-center"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </div>
              <h3 className="text-xl font-semibold p-4 text-center">{category.title}</h3>
              <img src={category.image} alt={category.name} className="w-2/3 h-48 object-cover" />
              <p className="px-12 py-4 text-gray-600 text-center" dangerouslySetInnerHTML={{ __html: category.description }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
