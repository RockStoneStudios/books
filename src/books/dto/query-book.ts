import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class QueryBookDto {
    @ApiProperty({example: '100 años de soledad',required:false})
    @IsString()
    @IsOptional()
    title : string;

    @ApiProperty({example: 'Realismo Magico',required:false})
    @IsOptional()
    @IsString()
    genre: string;
   
    @ApiProperty({example: 'Garcia Marquez',required:false})
    @IsString()
    @IsOptional()
    author : string;
   
}