import Sidebar from "../Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen max-w-[1000px] mx-auto bg-main w-full">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-x-slate-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;