const NavSection = ({children}) => {
  return (
      <div class="flex justify-between justify-items-center gap-12 text-indigo-200">
        { children }
      </div>
  );
};

export default NavSection;