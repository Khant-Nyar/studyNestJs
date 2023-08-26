import { CreateListingDto } from "./create-listing.dto";

export class CreateItemDto {
    name:string;
    isActive:boolean;
    listing:CreateListingDto;
}
