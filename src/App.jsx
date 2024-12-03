import { useState } from 'react'

function App() {
  const [addTitleTerm, setAddTitleTerm] = useState('');
  const [addAuthorTerm, setAddAuthorTerm] = useState('');
  const [addStatusTerm, setAddStatusTerm] = useState('draft');
  const [articles, setArticles] = useState([]);

  const handleInputChange = (e, setFunction) => {
    setFunction(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!addTitleTerm || !addAuthorTerm) {
      alert("Inserisci tutti i valori");
      return;
    }
    setArticles([...articles, { title: addTitleTerm, author: addAuthorTerm, status: addStatusTerm }]);
    setAddTitleTerm('');
    setAddAuthorTerm('');
    setAddStatusTerm('draft');
  };
  const deleteArticle = (articleIndex) => { 
    const newArticles = [...articles]; 
    newArticles.splice(articleIndex, 1);
     setArticles(newArticles);
  };

  const editArticle = (index) => {
    const newTitle = prompt('Modifica il titolo:', articles[index].title);
    if (newTitle) {
      const newArticles = articles.map((article, i) =>
        i === index ? { ...article, title: newTitle } : article
      );
      setArticles(newArticles);
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="mt-5">Articoli Blog</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={addTitleTerm}
            onChange={(e) => handleInputChange(e, setAddTitleTerm)}
            placeholder="Titolo dell'articolo"
            className="form-control mb-2"
            required
          />
          <input
            type="text"
            value={addAuthorTerm}
            onChange={(e) => handleInputChange(e, setAddAuthorTerm)}
            placeholder="Autore"
            className="form-control mb-2"
            required
          />
          <select
            value={addStatusTerm}
            onChange={(e) => handleInputChange(e, setAddStatusTerm)}
            className="form-select mb-2 "
          >
            <option value="draft">draft</option>
            <option value="published">Published</option>
          </select>
          <button type="submit" className="btn btn-primary m-2">Aggiungi Articolo</button>
        </form>
        <ul className="list-group mt-3">
          {articles.map((article, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {article.title} - {article.author} ({article.status})
              </span>
              <div>
                <button className="btn btn-success btn-sm me-2" onClick={() => editArticle(index)}>Modifica</button>
                <button className="btn btn-danger btn-sm " onClick={() => deleteArticle(index)}><span class="material-symbols-outlined">delete</span></button>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;




