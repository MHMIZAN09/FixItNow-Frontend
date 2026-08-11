import Footer from "../../components/layout/footer";
import { Navbar1 } from "../../components/layout/navbar";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Navbar1 />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default PublicLayout;
