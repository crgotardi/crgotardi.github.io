import { NavSection, ToggleTheme } from "@components/solid/";
import { Icon } from "@components/solid/";
import { ThemeProvider } from '@contexts/theme';

const Header = () => {
  return (
    <ThemeProvider>
      <nav class="flex justify-between justify-items-center gap-12 p-12 fixed w-screen border-box items-center">
        <NavSection>
          <a class="
            nav-item
            cursor-pointer
            font-semibold
          text-action-light
          dark:text-action-dark
          hover:text-sky-200
          dark:hover:text-sky-200
            transition-all
          ">
            CR
          </a>
        </NavSection>
        <NavSection>
          <ToggleTheme />
          <a
            class="
              nav-item 
              cursor-pointer
              font-semibold 
            text-action-light
            dark:text-action-dark
            hover:text-sky-200 
              transition-all
            "
            href="mailto: crgotardi@gmail.com?subject=Mail from your Website&body=Hi Chris, I am writing for..."
            target="_blank"
          >
            Contact me
          </a>
        </NavSection>
      </nav>
    </ThemeProvider>
  );
};

export default Header;