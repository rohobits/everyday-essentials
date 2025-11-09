export default function Placeholder({ title = "Page" }: { title?: string }) {
  return (
    <div className="container-max py-14">
      <h1 className="h1 mb-3">{title}</h1>
      <p className="text-slate">
        This is a placeholder page. You can replace this with real content anytime.
      </p>
    </div>
  );
}
