import React, {useState} from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";


const AgregarProducto = () => {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState('');


  return (
    <Container>
      <h1 className="display-3 text-center my-4">Nuevo Producto</h1>
      <hr />
      <Form className="my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: café" onChange={(e)=> setNombreProducto(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="ej: 50" onChange={(e)=>setPrecioProducto(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select onChange={(e)=>setCategoria(e.target.value)}>
            <option value=''>Seleccione una opcion</option>
            <option value='dfgdfg'>Bebida Caliente</option>
            <option value=''>Bebida Fria</option>
            <option value=''>Sandwich</option>
            <option value=''>Dulce</option>
            <option value=''>Salado</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
