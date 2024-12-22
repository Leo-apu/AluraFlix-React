/* eslint-disable react/prop-types */
import Banner from "../Banner/Banner";
import Categoria from "../Categoria/categoria";

const Home = ( { categorias  }) => {
    return (
        <>
            <Banner />
            { categorias &&  categorias.map((categoria) => (
                <Categoria key={categoria.id} titulo={categoria.titulo} colorPrimario={categoria.colorPrimario} />
            ))}
        </>
    );  
}

export default Home
