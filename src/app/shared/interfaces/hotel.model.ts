import { ReviewModel } from './review.model';

export interface HotelModel {
    id: number;
    name: string;
    pricePerNight: number;
    reviews: ReviewModel[];
    pictures: {thumbnail: string; photo: string}[]
}