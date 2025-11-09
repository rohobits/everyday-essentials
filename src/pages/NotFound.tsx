import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="container-max py-20 text-center">
      <h1 className="h1 mb-4">404</h1>
      <p className="text-slate mb-6">We couldn’t find that page.</p>
      <Link to="/" className="btn-primary">Back Home</Link>
    </div>
  );
}
