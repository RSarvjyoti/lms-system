import LMSPage from "./pages/LMSPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-blue-500 dark:bg-blue-700 text-white py-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Learning Management System</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <LMSPage />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2024 LMS. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
