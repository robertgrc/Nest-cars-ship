import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars =['Toyota','Honda','Jeep','CRV']

    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id:string){
        console.log({id})
        console.log(this.cars[id])
        return this.cars[id]

        
    }

}
