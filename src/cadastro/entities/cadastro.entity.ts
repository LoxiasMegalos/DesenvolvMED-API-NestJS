import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, Length, MinLength  } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Comentario } from "../../comentario/entities/comentario.entity";

@Entity('tb_cadastros')
export class Cadastro {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Length(11)
    @Column({ nullable: false, unique: true, length: 11 })
    @ApiProperty()
    cpf: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    sobrenome: string

    @IsNotEmpty()
    @MaxLength(255)
    @MinLength(4)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    senha: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, unique: true ,length: 255 })
    @ApiProperty()
    email: string

    @OneToMany(() => Comentario, (comentarioRealizado) => comentarioRealizado.cadastro)
    @ApiProperty({type: () => Comentario})
    comentarios: Comentario[]
}