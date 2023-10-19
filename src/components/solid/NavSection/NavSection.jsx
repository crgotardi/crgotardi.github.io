const NavSection = ({children}) => {
  return (
    <div
      class="
        flex
        justify-between
        justify-items-center
        items-center
        gap-8
        text-secondary-light
        dark:text-secondary-dark
      ">
      { children }
    </div>
  );
};

export default NavSection;