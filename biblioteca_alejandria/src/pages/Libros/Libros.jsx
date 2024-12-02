import { useEffect, useState } from "react";
import { useLibros } from "../../hooks/useLibros";


export function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        useLibros().then(([libros]) => {
            console.log(libros);
            setLibros(libros);
        });
    }, []);

    return (
        <div>
            <h1>Libros</h1>
            <section className="flex flex-wrap gap-5">
                {libros.map((libro)=>(
                    <div className="border border-slate-500 rounded-lg p-5 w-80 m-5" key={libro.id}>
                        <h2 className="text-xl">{libro.titulo}</h2>
                        <p className="text-sm">{libro.autor}</p>
                        <p className="text-sm">{libro.resumen}</p>
                        <p className="text-sm">{libro.anio_publicacion}</p>
                        <p className="text-sm">{libro.editorial}</p>
                    </div>
                ))}
            </section>
        </div>
    );

}