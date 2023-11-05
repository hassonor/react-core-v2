export interface Product {
    id: string;
    title: string;
    price: number;
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface ShoppingCart {
    items: CartItem[];
}

export interface ProductData {
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
}