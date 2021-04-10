export interface CarDetails{
    id:number;
    carName:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string,
    createdAt:Date;
    images:string[];
    isRented:boolean; 
}