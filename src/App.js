import React, {useState, useEffect} from "react";

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => 
  {
    const fetchBooks = async () =>
    {
      const response =await fetch('https://anapioficeandfire.com/api/books');
      const data = await response.json();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return <div className="App">
    <h1>Game of Thrones Books</h1>
    <ul>
      {books.map(book => (
        <li>
          <h3>{book.name}</h3>
          <p>Jahr: {book.released}</p>
        </li>
      ))}
    </ul>
    </div>;
}

export default App;
