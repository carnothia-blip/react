export const Nav = () => {
  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <div className="logo">
          <img src="logo.png" alt="" />
          <div className="logo-mark" />
          <span className="logo-text">홍길동</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#contact" className="btn">Resume</a>
        </div>
      </div>
    </header>
  );
};
