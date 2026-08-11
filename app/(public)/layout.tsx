import Footer from "../../components/layout/footer";
import Navbar1 from "../../components/layout/navbar";

import { getMe } from "../../services/getMe";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Navbar1 user={user} />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default PublicLayout;
