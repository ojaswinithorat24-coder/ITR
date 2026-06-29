import HeroSection from "../Component/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />

      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </>
  );
}

export default Home;