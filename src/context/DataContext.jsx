/* eslint-disable react/prop-types */

import axios from "axios";
import { useState , createContext , useEffect } from "react";

const DataContext = createContext();


export const DataProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const apiUrl = "https://6768f0cccbf3d7cefd3911a1.mockapi.io/api/v1/";

    const fetchCategorias = async () => {
        try {
            const response = await axios.get(apiUrl +'categorias');
            const data = await response.data;
            setCategorias( data );
        } catch (error) {
            console.error('Error al obtener las categorías:', error);
        }
    };

    const fetchVideos = async () => {
        try {
            const response = await axios.get( apiUrl +'videos');
            const data = await response.data;
            setVideos(data);
        } catch (error) {
            console.error('Error al obtener los videos:', error);
        }
    };  

    useEffect(() => {
        fetchCategorias();
        fetchVideos();
    }, []); 

    useEffect(() => {
        if (categorias.length > 0 && videos.length > 0) {
            setCargando(false);
        }
    }, [categorias, videos]);   


    const crearVideo = async (video) => {
        try {
            const response = await axios.post("http://localhost:3003/videos", video);
            setVideos((prevData) => [...prevData, response.data]);
        } catch (error) {
            console.error("Error al crear el video:", error);
        }
    };

    const actualizarVideo = async (video) => {
        try {
            const response = await axios.put( apiUrl +`videos/${video.id}`, video);
            setVideos((prevData) =>
                prevData.map((item) => (item.id === video.id ? response.data : item))
            );
        } catch (error) {
            console.error("Error al actualizar el video:", error);
        }
    };

    const eliminarVideo = async (id) => {
        try {
            await axios.delete(apiUrl +`videos/${id}`);
            setVideos((prevData) => prevData.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error al eliminar el video:", error);
        }
    };

    const obtenerVideo = async (id) => {
        try {
            const response = await axios.get(apiUrl +`videos/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error al obtener el video:", error);
        }
    };

    const crearCategoria = async (categoria) => {
        try {
            const response = await axios.post(apiUrl +"categorias", categoria);
            setCategorias((prevData) => [...prevData, response.data]);
        } catch (error) {
            console.error("Error al crear la categoría:", error);
        }
    };

    const actualizarCategoria = async (categoria) => {
        try {
            const response = await axios.put(
                apiUrl +`categorias/${categoria.id}`,
                categoria
            );
            setCategorias((prevData) =>
                prevData.map((item) => (item.id === categoria.id ? response.data : item))
            );
        } catch (error) {
            console.error("Error al actualizar la categoría:", error);
        }
    };

    const eliminarCategoria = async (id) => {
        try {
            await axios.delete(apiUrl +`categorias/${id}`);
            setCategorias((prevData) => prevData.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error al eliminar la categoría:", error);
        }
    };

    const obtenerCategoria = async (id) => {
        try {
            const response = await axios.get(apiUrl +`categorias/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error al obtener la categoría:", error);
        }
    };

    const contextValue = {
        categorias,
        videos,
        cargando,
        crearVideo,
        actualizarVideo,
        eliminarVideo,
        obtenerVideo,
        crearCategoria,
        actualizarCategoria,
        eliminarCategoria,
        obtenerCategoria,
    };



    return (
        <DataContext.Provider value={{ ...contextValue }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext  };