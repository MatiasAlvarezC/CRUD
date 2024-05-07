import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {

  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}
  


  async create(createProductoDto: CreateProductoDto) {
    return await this.productoRepository.save(createProductoDto);

  }

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id: number) {
    return this.productoRepository.findOneBy({id});
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return this.productoRepository.update(id,updateProductoDto);
  }

  remove(id: number) {
    return this.productoRepository.delete(id);
  }
}
