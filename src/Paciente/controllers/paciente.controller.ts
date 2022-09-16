import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Paciente } from "../entities/paciente.entity";
import { PacienteService } from "../services/paciente.service";

@ApiTags('Pacientes')
@Controller('/paciente')
export class PacienteController {

    constructor(
        private readonly service: PacienteService
    ) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Paciente[]> {
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Paciente> {
        return this.service.findById(id)
    }
}