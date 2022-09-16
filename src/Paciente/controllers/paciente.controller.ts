import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Paciente } from "../entities/paciente.entity";
import { PacienteService } from "../services/paciente.service";

@ApiTags('Pacientes')
@Controller('/paciente')
export class PacienteController {

    constructor(
        private readonly service: PacienteService
    ) { }

    @ApiOkResponse({ description: 'The resources were returned successfully' })
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Paciente[]> {
        return this.service.findAll()
    }
    @ApiOkResponse({ description: 'The resources were returned successfully' })
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Paciente> {
        return this.service.findById(id)
    }
}