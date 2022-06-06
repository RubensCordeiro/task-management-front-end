function GlobalContainer(props) {
  const { children } = props;
  return <div className="container mx-auto px-8 py-2 relative">{children}</div>;
}

export default GlobalContainer;
