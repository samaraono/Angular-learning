import type { Order } from './types.ts';

// Exemplo de entrada do enunciado.
export const orders: Order[] = [
  { id: 1, customer: 'Ana', status: 'paid',
    items: [{ name: 'Teclado', price: 150, quantity: 1 }, { name: 'Mouse', price: 50, quantity: 2 }] },
  { id: 2, customer: 'Bruno', status: 'pending',
    items: [{ name: 'Monitor', price: 900, quantity: 1 }] },
  { id: 3, customer: 'Ana', status: 'cancelled',
    items: [{ name: 'Cabo', price: 20, quantity: 3 }] },
  { id: 4, customer: 'Bruno', status: 'paid',
    items: [{ name: 'Headset', price: 300, quantity: 1 }] },
  { id: 5, customer: 'Carla', status: 'paid',
    items: [{ name: 'Webcam', price: 200, quantity: 1 }] },
];
