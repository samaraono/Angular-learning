// Tipos dados pelo enunciado. Não precisa mexer aqui.

export type OrderStatus = 'pending' | 'paid' | 'cancelled';

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: number;
  customer: string;
  status: OrderStatus;
  items: OrderItem[];
}
