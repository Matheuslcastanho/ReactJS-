/* eslint-disable jsx-a11y/anchor-is-valid */
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Developer Matheus</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal no Youtube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Grupo Telegram</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Instagram</p>
          </a>
        </section>
      </main>
    </div>
  );
}
