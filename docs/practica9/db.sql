CREATE TABLE Usuario (
  id integer NOT NULL PRIMARY KEY,
  nombre text NOT NULL,
  email text NOT NULL,
  direccion text NOT NULL,
  codigopostal integer NOT NULL
);


CREATE TABLE Producto (
  id integer NOT NULL PRIMARY KEY,
  nombre text NOT NULL,
  descripcion text NOT NULL,
  precio integer NOT NULL,
  img text NOT NULL,
  categoria text NOT NULL,
  stock text NOT NULL
);


CREATE TABLE Categoria (
  id integer NOT NULL PRIMARY KEY,
  nombre text NOT NULL,
  descripcion text NOT NULL
);


CREATE TABLE Productos en Categoria (
  id integer NOT NULL PRIMARY KEY,
  id_producto integer,
  id_categoria integer
);


CREATE TABLE Carrito (
  id integer NOT NULL PRIMARY KEY,
  id_usuario integer,
  status text
);


CREATE TABLE Carrito_Items (
  id integer NOT NULL PRIMARY KEY,
  id_carrito integer,
  id_producto integer,
  cantidad integer,
  subtotal integer
);


CREATE TABLE Pedido (
  id integer NOT NULL PRIMARY KEY,
  id_usuario integer,
  id_carrito integer,
  total integer,
  status text
);


ALTER TABLE Producto ADD CONSTRAINT Producto_id_fk FOREIGN KEY (id) REFERENCES Productos en Categoria (id_producto);
ALTER TABLE Categoria ADD CONSTRAINT Categoria_id_fk FOREIGN KEY (id) REFERENCES Productos en Categoria (id_categoria);
ALTER TABLE Usuario ADD CONSTRAINT Usuario_id_fk FOREIGN KEY (id) REFERENCES Carrito (id_usuario);
ALTER TABLE Carrito ADD CONSTRAINT Carrito_id_fk FOREIGN KEY (id) REFERENCES Carrito_Items (id_carrito);
ALTER TABLE Producto ADD CONSTRAINT Producto_id_fk FOREIGN KEY (id) REFERENCES Carrito_Items (id_producto);
ALTER TABLE Usuario ADD CONSTRAINT Usuario_id_fk FOREIGN KEY (id) REFERENCES Pedido (id_usuario);
ALTER TABLE Carrito ADD CONSTRAINT Carrito_id_fk FOREIGN KEY (id) REFERENCES Pedido (id_carrito);
