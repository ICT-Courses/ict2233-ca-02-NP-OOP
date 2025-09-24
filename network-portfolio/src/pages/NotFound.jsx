export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">
        Oops! The page you are looking for does not exist. Go back{" "}
        <a href="/" className="text-blue-600 dark:text-blue-400 underline">
          home
        </a>.
      </p>
    </div>
  );
}
