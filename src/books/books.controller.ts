import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { QueryBookDto } from './dto/query-book';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { books } from 'src/examples/ejemplo';
import { AuthGuard } from 'src/auth/auth.guard';


@UseGuards(AuthGuard)
@Controller('books')
@ApiTags('books')
@ApiBearerAuth()
export class BooksController {

  constructor(private readonly booksService: BooksService) {}

  @Post()
   async create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }
 
  // @ApiResponse({status : 200,description: [books]})
  @Get()
  async findAll() {
    return this.booksService.findAll();
  }


  @Patch(':id')
     async  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
  // @Get('/search/:title')
  //   async searchByTitle(@Param('title') title : string){
  //     return this.booksService.searchByTitle(title);
  // }
  // @Get('/searchAutor/:author')
  // async searchByAuthr(@Param('author') author :string){
  //   return this.booksService.searchByAuthor(author);
  

  @Get('/search')
  async search(@Query() query:  QueryBookDto){
    console.log(query);
    return  await this.booksService.search(query);
  }

  
  @Get(':id')
  async findOne(@Param('id') id: number) {
    console.log(id);
    return this.booksService.findOne(id);
  }

}
