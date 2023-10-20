import { createEffect } from 'solid-js'
import { NavSection, ToggleTheme } from "@components/solid/";
import { ThemeProvider } from '@contexts/theme'

const Header = () => {
  let navEl = null
  const compactHeaderClass = ['h-[20px]', 'py-6', 'px-12', 'bg-slate-300/60', 'dark:bg-slate-100/10', 'backdrop-blur-xl']
  const normalHeaderClass = ['p-12']

  createEffect(() => {
    navEl = document.querySelector('nav')

    document.addEventListener('scroll', () => {
      if (window.window.scrollY <= 100) {
        setNormalHeaderClass()
      } else {
        setCompactHeaderClass()
      }
    })
  }, [])

  function setCompactHeaderClass() {
    navEl.classList.remove(...normalHeaderClass)
    navEl.classList.add(...compactHeaderClass)
  }

  function setNormalHeaderClass() {
    navEl.classList.remove(...compactHeaderClass)
    navEl.classList.add(...normalHeaderClass)
  }

  return (
    <ThemeProvider>
      <nav class="flex justify-between justify-items-center gap-12 p-12 fixed w-screen border-box items-center transition-all z-50">
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