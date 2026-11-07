import type { Order } from './types.ts';

// TODO: crie você a interface OrderSummary
// (totalRevenue, countByStatus e topCustomer).
// Bônus: use Record<OrderStatus, number> em countByStatus.
export interface OrderSummary {}

export function summarizeOrders(orders: Order[]): OrderSummary {
  // seu código aqui
  throw new Error('summarizeOrders não implementado');
}
