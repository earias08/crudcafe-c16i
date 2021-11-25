import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ItemProducto = (props) => {
  const URL = process.env.REACT_APP_API_URL + "/" + props.producto.id;

  const eliminarProducto = () => {
    // console.log(URL);
    Swal.fire({
      title: "¿Esta segudo de eliminar el producto?",
      text: "No puedes recuperar un producto una vez que fue eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //aqui borro el producto
        try {
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
          });
          console.log(respuesta);
        } catch (error) {
          console.log(error);
        }
        //cartel informativo para el usuario
        Swal.fire(
          "Producto eliminado",
          "El producto fue correctamente borrado",
          "success"
        );
      }
    });
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {props.producto.nombreProducto}
        <span className="fw-bolder">
          - Precio:$ {props.producto.precioProducto}
        </span>
      </p>
      <div>
        <Button variant="warning">Editar</Button>
        <Button variant="danger" onClick={() => eliminarProducto()}>
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
