import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";


@Entity('tb_temas')
export class Tema {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    tema: string

    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    @ApiProperty({type: () => Postagem})
    postagens: Postagem[]
}