import styles from './Header.module.scss'

const Header = () => {
  return (
    <nav>
      <div >
        <p class={styles.navItems}>CR</p>
      </div>
      <div class={styles.navItems}>
        <p class="nav-item">Theme</p>
        <p class="nav-item">About</p>
        <p class="nav-item">Contact</p>
      </div>
    </nav>
  );
};

export default Header;