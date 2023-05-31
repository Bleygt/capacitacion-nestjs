import { Body, Controller, Delete, Get, HttpStatus, Post, Res, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosDto } from '../dto/productos.dto';
import { ProductosUpdateDto } from '../dto/productosUpdate.dto';
import { Productos } from 'src/models/productos.entity';
import { ProductosDeleteDto } from '../dto/productosDelete.dot';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get("/listProductos")
  async listProductos(@Res() res) {
    const productos = await this.productosService.listProductos();

    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data: productos,
      message: "Exitoso"
    })
  }
  
  @Post("/insertProducto")
  async insertProducto(@Res() res, @Body() producto: ProductosDto) {

    const insert = await this.productosService.InsertProducto(producto);
  
    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data: insert,
      message: "Producto creado exitosamente"
    })
  }

  @Put("/updateProducto")
  async updateProducto(@Res() res, @Body() producto: ProductosUpdateDto) {

    const update = await this.productosService.updateProducto(producto);
  
    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data: update,
      message: "Producto actualizado exitosamente"
    })
  }

  @Delete("/deleteProducto")
  async deleteProducto(@Res() res, @Body() producto: ProductosDeleteDto) {

    const deletes = await this.productosService.deleteProducto(producto);
  
    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data: deletes,
      message: "Producto eliminado exitosamente"
    })
  }

}
