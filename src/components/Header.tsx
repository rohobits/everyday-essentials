import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-offwhite/80 backdrop-blur supports-[backdrop-filter]:bg-offwhite/60 border-b border-accent/30">
      <div className="container-max flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/everyday-essentials-logo.png"
            alt="Everyday Essentials logo"
            className="h-10 w-auto"
          />
          <span className="font-semibold text-ink hidden sm:inline">Everyday Essentials</span>
        </Link>

        <nav className="flex items-center gap-4">
          <NavLink to="/" className="text-ink/80 hover:text-ink">Home</NavLink>
          <NavLink to="/services" className="text-ink/80 hover:text-ink">Services</NavLink>
          <NavLink to="/about" className="text-ink/80 hover:text-ink">About</NavLink>
          <NavLink to="/contact" className="text-ink/80 hover:text-ink">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
