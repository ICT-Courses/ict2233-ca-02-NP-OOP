// src/pages/NotFound.jsx

export default function NotFound() {
  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">
        Oops! The page you are looking for does not exist. Go back{" "}
        <a href="/" className="text-blue-400 underline">home</a>.
      </p>
    </div>
  );
}
