import { Body, Controller, Get, Post, Patch, Delete, Param, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
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
    createCar(@Body()body: any){
        return body;
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
