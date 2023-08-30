import More from "./more";

const Landing = () => {
  return (
    <>
      <main
        className="h-screen container mx-auto py-16 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/ffb6a1_1817a3625f5c458184e0e7254163328b~mv2.jpg/v1/fill/w_1280,h_708,al_c,q_85,enc_auto/ffb6a1_1817a3625f5c458184e0e7254163328b~mv2.jpg')",
        }}
      >
        <section className="text-center z-0" >
          <h1 className="text-5xl font-bold mb-4 text-blue-700 hover:text-blue-900 transition-colors duration-300  hover:scale-105 z-0">
            THE <span className="text-yellow-500">ELECRUISERS</span>
          </h1>

          <p className="text-lg text-gray-700">
          Connect.Charge.Conquer
          </p>
        </section>
      </main>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-20">
        <More />
      </div>
    </>
  );
};
export default Landing;
