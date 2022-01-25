function Navbar() {
  return (
    <section id="navbar">
      <nav id="header-nav">
        <ul id="header-menu" className="flex">
          <li className="menu-item">
            <a href="#about">Home</a>
          </li>
          <li className="menu-item">
            <a href="#about">About</a>
          </li>
          <li className="banner-menu-item menu-item">
            <a href="#work">Work</a>
          </li>
          <li className="banner-menu-item menu-item">
            <a href="#testimonial">Testimonials</a>
          </li>
          <li className="banner-menu-item menu-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
