// src/products/product.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async getProducts() {
    return await this.productModel.find().exec();
  }

  async getProductById(id: string) {
    return await this.productModel.findById(id).exec();
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    return await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
  }

  async deleteProduct(id: string) {
    return await this.productModel.findByIdAndRemove(id).exec();
  }
}
