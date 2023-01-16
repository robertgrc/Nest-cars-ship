import { Body, Controller, Get, Post, Patch, Delete, Param, ParseIntPipe, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly CarsService:CarsService
    ){}


    @Get()
    getAllCars() {
        return this.CarsService.findAll()
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string){
        console.log({id})       
        return this.CarsService.findOneById( id )   
    }

    @Post()
    
    createCar(@Body()createCarDto: CreateCarDto){
        return this.CarsService.create(createCarDto)
    }

    @Patch(":id")
    updateCar(@Body()body: any){
        return body;
    }

    @Delete(":id")
    deleteCar(@Param('id', ParseIntPipe) id:number){
        return {
            method: "delete",
            id
        }
    }


}
