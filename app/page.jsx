import Image from "next/image";

export default function HomePage() {
  return (
    <main className="page">
      <section className="card">
        <div className="brand" aria-hidden="true">
          <Image src="/pip-logo.jpg" alt="PiP logo" width={56} height={56} />
        </div>

        <p className="kicker">macOS utility</p>
        <h1>PiP: Make any window stay in focus</h1>
        <p className="copy">
          Pin any app window above others so it stays visible at all times.
        </p>

        <div className="actions">
          <a className="btn btn-primary" href="#" aria-label="Download PiP">
            download
          </a>
          <a
            className="btn btn-secondary"
            href="https://www.buymeacoffee.com/wylans"
            target="_blank"
            rel="noreferrer"
          >
            buy me a coffee
          </a>
        </div>

        <div className="preview">
          <Image
            src="/pip-demo.png"
            alt="PiP showing a pinned video window over a coding workspace"
            width={1368}
            height={1024}
            priority
          />
        </div>
      </section>

      <footer className="footer">
        <p className="footer-credit">
          Made by{" "}
          <a href="https://lansford.dev" target="_blank" rel="noreferrer">
            Wyatt Lansford
          </a>
        </p>
      </footer>
    </main>
  );
}
