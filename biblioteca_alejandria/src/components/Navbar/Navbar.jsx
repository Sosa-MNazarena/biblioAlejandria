import { Link } from "react-router-dom";


export function Navbar() {


  return (
    <header className="w-full flex items-center justify-between p-5 bg-slate-600">
      <nav className="w-full flex justify-between gap-5 items-center">
        <div className="flex items-center gap-5">
          <Link
            className="text-white font-thin hover:font-bold hover:underline-offset-2"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="text-white font-thin hover:font-bold hover:underline-offset-2"
            to={"/libros"}
          >
            Libros
          </Link>
          <Link
            className="text-white font-thin hover:font-bold hover:underline-offset-2"
            to={"/misLibros"}
          >
            Mis libros
          </Link>
        </div>

      </nav>
    </header>
  );
}
