import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
     image: '',
    content: '',
    category: '',
    published: false
  });
  
  const [articles, setArticles] = useState([]);

  const handleInputChange = (e, setFunction) => {
    setFunction(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.content || !formData.category) {
      alert("Inserisci tutti i valori");
      return;
    }
  }
  
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
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Titolo dell'articolo"
            className="form-control mb-2"
            required
          />
          <input
           type="text"
           name="author"
           value={formData.author}
           onChange={handleInputChange}
           placeholder="Autore"
           className="form-control mb-2"
           required
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="immagine"
            className="form-control mb-2"
          />
          <input
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Contenuto dell'articolo"
            className="form-control mb-2"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Categoria"
            className="form-control mb-2"
            required
          />
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




