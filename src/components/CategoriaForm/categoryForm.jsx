
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { v4 as uuidv4 } from "uuid";

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

const CategoryForm = () => {
  const { crearCategoria } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newCategory = { ...data, id: uuidv4() };
    crearCategoria(newCategory);
    reset({
      colorPrimario: "#000000",
      descripcion: "",
      titulo: "",
      categoria: "",
    });
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
              placeholder="Ingrese el título de la categoría"
            />
            {errors.titulo && <Error>{errors.titulo.message}</Error>}
          </InputGroup>

          <InputGroup>
            <Label>Color Primario</Label>
            <Input
              style={{ height: "50px" }}
              type="color"
              className={errors.colorPrimario ? "has-error" : ""}
              {...register("colorPrimario", {
                required: "El color primario es obligatorio",
              })}
            />
            {errors.colorPrimario && <Error>{errors.colorPrimario.message}</Error>}
          </InputGroup>

          <InputGroup>
            <Label>Descripción</Label>
            <Input
              className={errors.descripcion ? "has-error" : ""}
              {...register("descripcion", {
                required: "La descripción es obligatoria",
              })}
              placeholder="Ingrese la descripción de la categoría"
            />
            {errors.descripcion && <Error>{errors.descripcion.message}</Error>}
          </InputGroup>
        </FieldGroup>

        <ButtonGroup>
          <Button type="submit">GUARDAR</Button>
          <Button type="button" 
          onClick={() =>
            reset({
              colorPrimario: "#000000",
              descripcion: "",
              titulo: "",
              categoria: "",
            })
          }
          >
            LIMPIAR
          </Button>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

export default CategoryForm;