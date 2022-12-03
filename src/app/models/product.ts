export interface Product {
  id: number;
  name: string;
  brand: string;
  originalPrice: number;
  discountedPrice?: number;
  imageUrl?: string; 
}
