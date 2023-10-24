// products.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './products.service';
import { ProductsController } from './products.controller';
import { Product, ProductSchema } from './entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forRoot(
      'mongodb://mongo:lOWn83s1tUn6d3htFM8t@containers-us-west-79.railway.app:5931',
    ),
  ],
  providers: [ProductService],
  controllers: [ProductsController],
})
export class ProductsModule {}
