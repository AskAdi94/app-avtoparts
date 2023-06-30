import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";



export class  CreateUserDto {
    
    
    @ApiProperty({example: 'test@mail.ru', description: 'Уникальный почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({},{message: 'Некорректный email'})
    readonly email: string;
    @ApiProperty({example: '123456', description: 'Пароль пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4,8, {message: 'Не меньше 4 символов и не больше 8 символов'})
    readonly password: string;
}