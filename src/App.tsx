import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <footer className="border-t border-accent/30">
        <div className="container-max py-8 text-sm text-slate flex justify-between flex-wrap gap-2">
          <p>© {new Date().getFullYear()} Everyday Essentials</p>
          <p>
            Built with ❤️ • <a className="hover:underline" href="https://squareup.com/" target="_blank">Square</a> + React
          </p>
        </div>
      </footer>
    </>
  );
}
