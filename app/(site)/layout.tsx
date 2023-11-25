import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { DeleteContextProvider } from "../context/DeleteContext";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <DeleteContextProvider>
          <div className="flex flex-col h-screen sm:overflow-hidden">
            <Navbar />
            <div className="bg-gray-200 flex flex-1 ">
              <div className="px-40 flex flex-col sm:flex-row my-10 gap-16 w-full">
                <Sidebar />
                <div className="h-full bg-white flex-1 rounded-xl py-10 px-12">
                  {children}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </DeleteContextProvider>
      </body>
    </html>
  );
}
