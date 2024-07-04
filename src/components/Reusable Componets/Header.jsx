function Header({ className, text, level = 2 }) {
  if (level === 1) {
    return <h1 className={className}>{text}</h1>;
  } else {
    return <h2 className={className}>{text}</h2>;
  }
}

export default Header;
