import { getLibros } from "../services/libros";

export async function useLibros() {
    const libros = await getLibros();

    if (Array.isArray(libros)) {
        libros.sort((a, b) => a.titulo.localeCompare(b.titulo)); // Ordena alfabéticamente por título
    }

    return [libros];
}
