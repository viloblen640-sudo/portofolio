import Loader from "./components/Loader";
import Stars from "./components/Stars";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Contact from "./sections/Contact";
import { profile } from "./data/content";
export default function App() {
  return (
    <>
      <Loader /><Stars /><Nav />
      <main><Hero /><About /><Stack /><Contact /></main>
      <footer className="border-t border-line py-8 text-center text-sm text-mute">© {new Date().getFullYear()} {profile.name}, {profile.school}</footer>
    </>
  );
}
