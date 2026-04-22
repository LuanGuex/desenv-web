function Article({ titulo, autor, data, dataFormatada, conteudo, imagem, legendaImagem }) {
  return (
    <main className="main">
      <article>
        <h2>{titulo}</h2>
        <time dateTime={data}>{dataFormatada}</time>
 
        {conteudo.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}
 
        <figure>
          <img src={imagem} alt={legendaImagem} />
          <figcaption>{legendaImagem}</figcaption>
        </figure>
      </article>
    </main>
  );
}
 
export default Article;