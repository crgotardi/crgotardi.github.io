import NavSection from "../NavSection/NavSection";

const Header = () => {
  return (
    <nav class="flex justify-between justify-items-center gap-12 p-5 fixed">
      <NavSection>
        <p>CR</p>
      </NavSection>
      <NavSection>
        <p class="nav-item">Theme</p>
        <p class="nav-item">About</p>
        <p class="nav-item">Contact</p>
      </NavSection>
    </nav>
  );
};

export default Header;