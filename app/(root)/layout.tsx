import { Footer } from "@/components/modules/root-layout/footer2";
import NavBar from "@/components/modules/root-layout/nav-bar";
import StoreProvider from "../StoreProvider";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <div className="container max-w-[1240px] mx-auto min-h-screen flex flex-col">
        <NavBar />
        <div className="grow"> {children}</div>
        <Footer />
        {/* <Footer01 /> */}
      </div>
    </StoreProvider>
  );
}

export default RootLayout;
