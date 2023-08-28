import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import {InjectRepository} from '@nestjs/typeorm';
import { QueryBookDto } from './dto/query-book';
import { log } from 'console';

@Injectable()
export class BooksService {

   constructor(
     @InjectRepository(Book) 
      private readonly bookRepository : Repository<Book>
   ){}

 async  create(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create(createBookDto)
    return await this.bookRepository.save(book);
  }

  async findAll() {
    return  await this.bookRepository.find();
  }

  async findOne(id: number) {
    return await this.bookRepository.findOneBy({id})
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    return  await this.bookRepository.update(id,updateBookDto);
  }

  async remove(id: number) {
    return await this.bookRepository.softDelete({id});
  }
  // async searchByTitle (title : string) {
  //    return await this.bookRepository.find({where : {title}})
  // }

  // async searchByAuthor(author :string){
  //   return await this.bookRepository.find({where : {author}})
  // }

  async search(query : QueryBookDto) {
    console.log('hello');
    
    const queryBuilder = this.bookRepository.createQueryBuilder('book');
    const {title,genre,author} = query;
    console.log(title,genre,author);
    
    if(title) queryBuilder.orWhere('book.title LIKE :title', { title: `%${title}%` });
    if(genre) queryBuilder.orWhere('book.genre LIKE :genre', { genre: `%${genre}%` });
    if(author) queryBuilder.orWhere('book.author LIKE :author', { author: `%${author}%` });

    return queryBuilder.getMany();

  }
}
