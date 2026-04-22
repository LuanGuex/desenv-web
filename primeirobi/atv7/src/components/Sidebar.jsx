function Sidebar({ postsRelacionados }) {
  return (
    <aside className="aside">
      <h3>Posts Relacionados</h3>
      <ul>
        {postsRelacionados.map((post) => (
          <li key={post.label}>
            <a href={post.href}>{post.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
 
export default Sidebar;
 