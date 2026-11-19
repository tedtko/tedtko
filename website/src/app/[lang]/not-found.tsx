import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center">
        <h1>404</h1>
        <p className="lead">Page not found · Seite nicht gefunden · Page introuvable · Página no encontrada · Pagina non trovata</p>
        <Link href="/" className="btn btn-primary">Home</Link>
      </div>
    </section>
  );
}
