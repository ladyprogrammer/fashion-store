export interface Product {
  id: number;
  name: string;
  brand: string;
  rating: number;
  originalPrice: number;
  discountedPrice?: number;
  imageUrl?: string; 
}
