import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
 
function App() {
  const blogTitulo = 'Meu Blog de Viagens';
 
  const navLinks = [
    { label: 'Home',    href: '#' },
    { label: 'Sobre',   href: '#' },
    { label: 'Contato', href: '#' },
  ];
 
  const post = {
    titulo: 'Descobrindo as Praias do Nordeste',
    autor: 'Autor do Blog',
    data: '2026-02-28',
    dataFormatada: '28 de fevereiro de 2026',
    conteudo: [
      'As praias do Nordeste brasileiro são conhecidas por suas águas cristalinas, areias claras e clima ensolarado durante quase todo o ano. Cada destino possui características únicas, que vão desde falésias coloridas até piscinas naturais formadas por recifes de corais.',
      'Além da beleza natural, a região oferece uma rica cultura local, com culinária típica, música e tradições que encantam os visitantes. Explorar as praias nordestinas é uma experiência completa, combinando descanso, aventura e contato com paisagens inesquecíveis.',
    ],
    imagem: '/imagens/Praia.jpg',
    legendaImagem: 'Praia paradisíaca no Nordeste brasileiro com águas cristalinas.',
  };
 
  const postsRelacionados = [
    { label: 'Montanhas do Nordeste', href: '#' },
    { label: 'Passeios Marítimos',    href: '#' },
    { label: 'Comidas Típicas',       href: '#' },
  ];
 
  const anoAtual = new Date().getFullYear();
 
  return (
    <div className="app-grid">
 
      <Header titulo={blogTitulo} links={navLinks} />
 
      <Article
        titulo={post.titulo}
        autor={post.autor}
        data={post.data}
        dataFormatada={post.dataFormatada}
        conteudo={post.conteudo}
        imagem={post.imagem}
        legendaImagem={post.legendaImagem}
      />
 
      <Sidebar postsRelacionados={postsRelacionados} />
 
      <Footer ano={anoAtual} />
 
    </div>
  );
}
 
export default App;