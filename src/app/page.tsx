import { Gallery } from "@/components/gallery";
import Header from "@/components/header";
import { Navbar } from "@/components/nav";

const HomePage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sky-100 py-20">
      <div className="w-full max-w-screen-2xl mx-auto p-20 bg-slate-100 rounded-2xl shadow-lg">
        <Navbar/>
        <Header/>
        <Gallery/>
        {/* <h1 className="text-4xl font-bold text-green-500">Home Page</h1> */}
      </div>
    </main>
  );
};

export default HomePage;