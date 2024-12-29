import { Footer, Header } from "../../utils/Route";
import PropTypes from "prop-types";
import { useTheme } from "../../App"; // Import the `useTheme` hook

export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function

  return (
    <div className={`layout-container ${theme}`}>
      <Header />
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
