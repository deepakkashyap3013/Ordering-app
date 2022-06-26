import { IsString,IsNotEmpty,IsPositive,IsPhoneNumber } from "class-validator";


export class CreateOrderRequest{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsPositive()
    @IsNotEmpty()
    price: number;

    @IsPhoneNumber()
    phoneNumber: string;
}