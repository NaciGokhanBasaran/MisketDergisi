export default function Footer() {
  return (
    <div className="Footer">
      <a href="https://iul.meb.k12.tr/">
        {" "}
        <img src={require("../images/iülLogo.png")} />
      </a>
      <div className="footer-mid">
        <a href="https://www.instagram.com/iulyazilim/">
          <p>© İÜL Yazılım Kulübü</p>
        </a>
        <a href="https://www.instagram.com/nacigkhnbsrn/">
          <p>Website-Naci Gökhan Başaran</p>
        </a>
      </div>
      <a href="https://www.instagram.com/iulyazilim/">
        <img src={require("../images/yazılımKulubuLogo.png")} />
      </a>
    </div>
  );
}
