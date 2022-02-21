import logo from './logo.svg';
import './App.css';
import Students from './Students';

var students = [
  {
    "id": 1,
    "name": "Gaurav"
  },
  {
    "id": 2,
    "name": "Rishi"
  }
]

function App() {
  return (
    <div>
      <Students list={students}></Students>
    </div>
  );
}

export default App;
