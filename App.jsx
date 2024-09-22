import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IDCard from './components/IDCard';
import Counter from './components/Counter';
import Form from './components/Form';
import QuizApp from './components/QuizApp';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">IDCard</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/form">Form</Link>
        <Link to="/quiz">Quiz App</Link>

      </nav>
      <Routes>
        <Route path="/" element={<IDCard />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/quiz" element={<QuizApp />} />

      </Routes>
    </Router>
  );
}

export default App;
