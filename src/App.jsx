import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuestionsList from './components/QuestionsList';
import QuestionDetail from './components/QuestionDetail';
import AskQuestion from './components/AskQuestion';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<QuestionsList />} />
              <Route path="/question/:id" element={<QuestionDetail />} />
              <Route path="/ask" element={<AskQuestion />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;