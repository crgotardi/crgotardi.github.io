import NavSection from "../NavSection/NavSection";

const Header = () => {
  return (
    <nav class="flex justify-between justify-items-center gap-12 p-12 fixed w-screen border-box">
      <NavSection>
          <a class="nav-item cursor-pointer font-semibold">
            CR
          </a>
      </NavSection>
      <NavSection>
          <a class="nav-item cursor-pointer font-semibold" href="mailto: crgotardi@gmail.com?subject=Mail from your Website&body=Hi Chris, I am writing for..." target="_blank">
            Contact me
          </a>
      </NavSection>
    </nav>
  );
};

export default Header;