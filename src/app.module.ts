import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Producto } from './producto/entities/producto.entity';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      database: "crudbd",
      entities: [Producto],
      synchronize: true 
    }),
    ProductoModule
  ],
    controllers:[AppController],
    providers: [AppService],
})

export class AppModule {}
