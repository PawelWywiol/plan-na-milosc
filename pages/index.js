import PageHead from "../components/PageHead";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import AuthorSection from "../components/AuthorSection";
import Footer from "../components/Footer";
import CookiesBar from "../components/CookiesBar";

export default function Home() {
  return (
    <div>
      <PageHead />
      <main>
        <Header />
        <HomeSection />
        <AuthorSection />
        <Footer />
        <CookiesBar />
      </main>
    </div>
  );
}
