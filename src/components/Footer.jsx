import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter, // ✅ înlocuit FaXTwitter cu FaTwitter
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa"; // ✅ fa în loc de fa6

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const footerStyle = {
    backgroundColor: darkMode ? "#1f2937" : "#e5e7eb",
    color: darkMode ? "#fff" : "#111",
    padding: "2rem 1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderTop: "1px solid #ccc",
    fontSize: "14px",
  };

  const sectionStyle = {
    flex: "1",
    minWidth: "200px",
    marginBottom: "1rem",
  };

  const iconStyle = {
    marginRight: "10px",
    fontSize: "18px",
    color: darkMode ? "#60a5fa" : "#1e40af",
    cursor: "pointer",
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h4>{t("footer.contact")}</h4>
        <p>{t("footer.email")}: suport@ecommerceshopitc.ro</p>
        <p>{t("footer.mobile")}: 0760 123 456</p>
        <p>{t("footer.phone")}: 0251 123 456</p>
      </div>

      <div style={sectionStyle}>
        <h4>{t("footer.onlineStore")}</h4>
        <p>
          <a href="/despre-noi">{t("footer.aboutUs")}</a>
        </p>
        <p>
          <a href="/termeni">{t("footer.terms")}</a>
        </p>
      </div>

      <div style={sectionStyle}>
        <h4>{t("footer.socialMedia")}</h4>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaFacebook style={iconStyle} />
          <FaInstagram style={iconStyle} />
          <FaTwitter style={iconStyle} />
          <FaLinkedin style={iconStyle} />
          <FaTiktok style={iconStyle} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

