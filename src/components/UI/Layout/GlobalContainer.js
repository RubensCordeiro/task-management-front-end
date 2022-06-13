function GlobalContainer(props) {
  const { children } = props;
  return (
    <section className="container mx-auto px-8 py-2 relative min-h-screen mt-8">
      {children}
    </section>
  );
}

export default GlobalContainer;
