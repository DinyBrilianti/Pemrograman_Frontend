/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import StyleFooter from "./style.js";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyleFooter>
    <div>
      <footer>
        <h2>Movie App</h2>
        <p>Created by aufaroot18</p>
      </footer>
    </div>
    </StyleFooter>
  );
}

export default Footer;
