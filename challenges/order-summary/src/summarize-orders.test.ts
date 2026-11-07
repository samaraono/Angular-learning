import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { orders } from './orders.data.ts';
import { summarizeOrders } from './summarize-orders.ts';
import type { Order } from './types.ts';

// Os testes começam falhando de propósito: eles viram verdes quando a solução estiver certa.
describe('summarizeOrders', () => {
  it('gera o resumo do exemplo do enunciado', () => {
    assert.deepEqual(summarizeOrders(orders), {
      totalRevenue: 750,
      countByStatus: { pending: 1, paid: 3, cancelled: 1 },
      topCustomer: 'Bruno',
    });
  });

  it('lista vazia: receita 0, todos os status com 0 e topCustomer null', () => {
    assert.deepEqual(summarizeOrders([]), {
      totalRevenue: 0,
      countByStatus: { pending: 0, paid: 0, cancelled: 0 },
      topCustomer: null,
    });
  });

  it('pedido com items vazio vale 0', () => {
    const input: Order[] = [
      { id: 1, customer: 'Ana', status: 'paid', items: [] },
    ];

    const summary = summarizeOrders(input);

    assert.equal(summary.totalRevenue, 0);
    assert.deepEqual(summary.countByStatus, { pending: 0, paid: 1, cancelled: 0 });
  });

  it('sem pedido pago, topCustomer é null', () => {
    const input: Order[] = [
      { id: 1, customer: 'Ana', status: 'pending', items: [{ name: 'A', price: 10, quantity: 1 }] },
      { id: 2, customer: 'Bruno', status: 'cancelled', items: [{ name: 'B', price: 99, quantity: 1 }] },
    ];

    assert.equal(summarizeOrders(input).topCustomer, null);
  });

  it('soma vários pedidos pagos do mesmo cliente para achar o topCustomer', () => {
    const input: Order[] = [
      { id: 1, customer: 'Ana', status: 'paid', items: [{ name: 'A', price: 100, quantity: 1 }] },
      { id: 2, customer: 'Bruno', status: 'paid', items: [{ name: 'B', price: 150, quantity: 1 }] },
      { id: 3, customer: 'Ana', status: 'paid', items: [{ name: 'C', price: 60, quantity: 1 }] },
    ];

    assert.equal(summarizeOrders(input).topCustomer, 'Ana');
  });

  it('em caso de empate, vence quem aparecer primeiro', () => {
    const input: Order[] = [
      { id: 1, customer: 'Carla', status: 'paid', items: [{ name: 'A', price: 100, quantity: 1 }] },
      { id: 2, customer: 'Ana', status: 'paid', items: [{ name: 'B', price: 50, quantity: 2 }] },
    ];

    assert.equal(summarizeOrders(input).topCustomer, 'Carla');
  });

  it('pedidos pendentes e cancelados não entram na receita', () => {
    const input: Order[] = [
      { id: 1, customer: 'Ana', status: 'pending', items: [{ name: 'A', price: 500, quantity: 1 }] },
      { id: 2, customer: 'Ana', status: 'cancelled', items: [{ name: 'B', price: 500, quantity: 1 }] },
      { id: 3, customer: 'Ana', status: 'paid', items: [{ name: 'C', price: 10, quantity: 3 }] },
    ];

    assert.equal(summarizeOrders(input).totalRevenue, 30);
  });
});
