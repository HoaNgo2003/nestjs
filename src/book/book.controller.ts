import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/book.dto';
import { UpdateBookDto } from './dto/updatebook.dto';
import {Query as ExpessQuery} from 'express-serve-static-core'
import { AuthGuard } from '@nestjs/passport';
@Controller('books')
export class BookController {
  constructor(private bookServiec: BookService){}
  @Get()
  async getAllBook(@Query() query: ExpessQuery):Promise<Book[]>{
     
    return this.bookServiec.findAll(query)
  }
  @UseGuards(AuthGuard())
  @Post()
  async creatBook(@Body() book:CreateBookDto,
@Req() req
): Promise<Book>{
    console.log(req.user)
    return this.bookServiec.create(book, req.user)
  }
  @Get(':id')
  async getBook(
    @Param('id')
    id: string
  ):Promise<Book>{
    return this.bookServiec.getBookById(id)
  }
  @Patch(':id')
    async updateBook(
      @Param('id')
      id: string,
      @Body()
      book: UpdateBookDto
  ):Promise<Book>{
    return this.bookServiec.updateById(id, book)
  }
  @Delete(':id')
  async deleteBook(@Param('id') id: string){
    return this.bookServiec.deleteBookById(id)
  }
  
}
