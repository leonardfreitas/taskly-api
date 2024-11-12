import { IsOptional, IsString } from "class-validator"

export class CreateTaskDto {
    @IsString({ message: 'O titulo é obrigatorio' })
    title: string

    @IsString()
    @IsOptional()
    content?: string
}
