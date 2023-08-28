import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt,IsPositive ,IsNotEmpty } from "class-validator";


export class CreateBookDto {
    @ApiProperty({example: '100 años de soledad'})
    @IsString()
    @IsNotEmpty()
    title : string;


    @ApiProperty({example: 'Realismo Magico'})
    @IsString()
    genre: string;

    @ApiProperty({example: 6})
    @IsInt()
    @IsPositive()
    quantity : number;

    @ApiProperty({example: 'Gabriel Garcia Marquez'})
    @IsString()
    @IsNotEmpty()
    author : string;

    @ApiProperty({example: '100añossoledad.png'})
    @IsString()
    @IsNotEmpty()
    image : string;
}
