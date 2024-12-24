/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

const FormContainer = styled.div`
    width: 95%;
  margin-bottom: 30px;

  h2 {
    margin-bottom: 20px;
    padding: 25px 0;
    border-bottom: 1px solid #555;
    border-top: 1px solid #555;
  }
`;

const Label = styled.label`
  display: block;
  margin: 15px 0 15px;
  font-weight: bold;
`;

const TextArea = styled.textarea`
  width: 50%;
  padding: 10px;
  border: 1px solid #555;
  background: #0e0e0e;
  color: white;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &.has-error {
    border-color: #e63946;
    box-shadow: inset 0 0 5px #e63946;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 20px 10px;
  border: 1px solid #555;
  background: #0e0e0e;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &.has-error {
    border-color: #e63946;
    box-shadow: inset 0 0 5px #e63946;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 20px 10px;
  border: 1px solid #555;
  background: #0e0e0e;
  color: white;
  border-radius: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &.has-error {
    border-color: #e63946;
    box-shadow: inset 0 0 5px #e63946;
  }

`;

const Error = styled.p`
  color: #e63946;
  font-size: 14px;
  margin: 5px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const Button = styled.button`
  background-color: #0e0e0e;
  color: #ffffff;
  border-color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    border-color: #2171D1;
    box-shadow: inset 0 0 8px #2171D1;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const AddCategoryButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  position: absolute;
  top: 270px;
  right: 60px;

  @media (max-width: 768px) {
    position: static;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  flex: 1;
`;

const VideoForm = ( { categorias , cambiarEstado }) => {
    const { crearVideo } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newVideo = { ...data, id: uuid() };
    crearVideo(newVideo);
    reset();
  };

  return (
    <FormContainer>
      <h2>Crear Tarjeta</h2>

      <AddCategoryButton onClick={() => cambiarEstado("crearCategoria")}>
        <AiOutlinePlus size={20} style={{ marginRight: "10px" }} /> 
        Menu Categoria
      </AddCategoryButton>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <InputGroup>
            <Label>Título</Label>
            <Input
              className={errors.titulo ? "has-error" : ""}
              {...register("titulo", { required: "El título es obligatorio" })}
              placeholder="Ingrese el título del video"
            />
            {errors.titulo && <Error>{errors.titulo.message}</Error>}
          </InputGroup>

          <InputGroup>
            <Label>Categoría</Label>
            <Select
              className={errors.categoria ? "has-error" : ""}
              {...register("categoria", {
                required: "Seleccione una categoría",
              })}
              defaultValue=""
            >
              <option value="" disabled >Seleccione una categoría</option>
             {categorias.map((categoria) => (
               <option key={categoria.id} value={categoria.titulo} >{categoria.titulo}</option>
             ))}
            </Select>
            {errors.categoria && <Error>{errors.categoria.message}</Error>}
          </InputGroup>
        </FieldGroup>

        <FieldGroup>
          <InputGroup>
            <Label>Imagen</Label>
            <Input
              className={errors.imagen ? "has-error" : ""}
              {...register("imagen", { required: "El enlace es obligatorio" })}
              placeholder="Ingrese el enlace de la imagen"
            />
            {errors.imagen && <Error>{errors.imagen.message}</Error>}
          </InputGroup>

          <InputGroup>
            <Label>Video</Label>
            <Input
              className={errors.link ? "has-error" : ""}
              {...register("link", { required: "El enlace es obligatorio" })}
              placeholder="Ingrese el enlace del video"
            />
            {errors.link && <Error>{errors.link.message}</Error>}
          </InputGroup>
        </FieldGroup>

        <Label>Descripción</Label>
        <TextArea
          className={errors.descripcion ? "has-error" : ""}
          {...register("descripcion", {
            required: "La descripción es obligatoria",
          })}
          rows={4}
          placeholder="¿De qué se trata este video?"
        />
        {errors.descripcion && <Error>{errors.descripcion.message}</Error>}

        <ButtonGroup>
          <Button type="submit">GUARDAR</Button>
          <Button type="button" $secondary onClick={() => reset()}>
            LIMPIAR
          </Button>
        </ButtonGroup>
      </form>


    </FormContainer>
  );
};

export default VideoForm;
