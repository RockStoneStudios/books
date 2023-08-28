import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateAuthDto {
    @ApiProperty({example : 'john'})
    @IsString()
    @IsNotEmpty()
    username : string;

    @ApiProperty({example : 'changeme'})
    @IsString()
    @IsNotEmpty()
    password : string;
}

