function GlobalContainer(props) {
  const { children } = props;
  return (
    <div className="container mx-auto px-8 py-2 border-2 border-red-300">
      {children}
    </div>
  );
}

export default GlobalContainer;
