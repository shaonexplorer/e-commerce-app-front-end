import { Footer } from "@/components/modules/root-layout/footer2";
import NavBar from "@/components/modules/root-layout/nav-bar";
import StoreProvider from "../StoreProvider";
import { cookies } from "next/headers";

async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  return (
    <StoreProvider>
      <div className="container max-w-[1240px] mx-auto min-h-screen flex flex-col">
        <NavBar token={accessToken} />
        <div className="grow"> {children}</div>
        <Footer />
        {/* <Footer01 /> */}
      </div>
    </StoreProvider>
  );
}

export default RootLayout;
