/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";
import { useContext, useEffect } from "react";

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    margin-bottom: 5px;
    padding: 15px 0;
    border-bottom: 1px solid #6bd1ff;
    border-top: 1px solid #6bd1ff;
  }
`;

const Label = styled.label`
  display: block;
  margin: 5px 0 8px;
  color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #6bd1ff;
  background: #03122f;
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
  padding: 10px 10px;
  border: 1px solid #6bd1ff;
  background: #03122f;
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
  border: 1px solid #6bd1ff;
  background: #03122f;
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
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  background-color: #03122F;
  color: #ffffff;
  border-color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: #000000;
    color: #2171D1;
    border-color: #2171D1;
    box-shadow: inset 0 0 10px #2171D1;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditVideoForm = ({ categorias, selectedVideo }) => {
  const { actualizarVideo } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Usamos useEffect para rellenar el formulario con los datos de selectedVideo
  useEffect(() => {
    if (selectedVideo) {
      // Rellenamos el formulario con los datos del video seleccionado
      reset({
        titulo: selectedVideo.titulo || "",
        categoria: selectedVideo.categoria || "",
        imagen: selectedVideo.imagen || "",
        link: selectedVideo.link || "",
        descripcion: selectedVideo.descripcion || "",
      });
    }
  }, [selectedVideo, reset]);

  const onSubmit = (data) => {
    actualizarVideo(data);
    reset();
  };

  return (
    <FormContainer>
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
              <option value="" disabled>
                Seleccione una categoría
              </option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.titulo}>
                  {categoria.titulo}
                </option>
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
          <Button type="button" onClick={() => reset()}>
            RESTAURAR
          </Button>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

export default EditVideoForm;
