import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { isReadable } from 'stream';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from "uuid"
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand:"Toyota",
            model:"Corolla"
        },
        {
            id: uuid(),
            brand:"Honda",
            model:"Civic"
        },
        {
            id: uuid(),
            brand:"Jeep",
            model:"Cherokee"
        },
    ];

    findAll(){
        return this.cars
    }

    findOneById(id:string){
        
        const car = this.cars.find( car=> car.id===id);

        if (!car)throw new NotFoundException(`Car with id'${id}' not found`);
        

        return car;
        
    }

    create( createCarDto:CreateCarDto ){
        const car:Car ={
            id: uuid(),
            // model: createCarDto.brand,//usar el operador... es igual al codigo comentado
            // brand: createCarDto.model,
            ...createCarDto
        }

        this.cars.push(car);

        return car;
    }

    update(id: string, updateCarDto:UpdateCarDto){

        let carDB= this.findOneById( id);

        if(updateCarDto.id && updateCarDto.id !==id)
            throw new BadRequestException(`Car id is not valid inside body`)

        this.cars = this.cars.map( car=>{
            if( car.id ===id){
                carDB = {...carDB,...updateCarDto,id}
                return carDB
            }
            return car;
        })

        return carDB

        }
        
        delete( id: string){
            const car = this.findOneById(id)
            this.cars= this.cars.filter(car=>car.id !==id);
        }

        fillCarsWithSeedData(cars:Car[]){
            this.cars = cars;
        }


}
