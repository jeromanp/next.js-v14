export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <header>Cabecera del Blog</header>
        <main>
          <section>{children}</section>
          <aside>
            <form>
              <input type="search" name="" id="" placeholder="Ingresa un valor" />
              <input type="submit" value="Buscar" />
            </form>
          </aside>
        </main>
        <footer>Pie de página del Blog</footer>
      </>
    );
  }
  