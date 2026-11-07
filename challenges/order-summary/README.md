# Desafio: resumo de pedidos

Uma loja tem uma lista de pedidos. Implemente a função `summarizeOrders`,
que recebe essa lista e devolve um resumo.

Tempo sugerido: **até 40 minutos**, como se fosse a prova.

## Onde implementar

| Arquivo | O que tem |
|---|---|
| `src/summarize-orders.ts` | **Sua solução:** a interface `OrderSummary` e a função `summarizeOrders` |
| `src/types.ts` | Tipos do enunciado (`Order`, `OrderItem`, `OrderStatus`) |
| `src/orders.data.ts` | Exemplo de entrada |
| `src/summarize-orders.test.ts` | Testes que validam a solução |
| `src/main.ts` | Imprime o resumo do exemplo |

## O resumo deve conter

1. **`totalRevenue`**: soma do valor de todos os pedidos **pagos** (`price × quantity` de cada item).
2. **`countByStatus`**: quantidade de pedidos em cada status. Os três status devem aparecer sempre, mesmo com 0.
3. **`topCustomer`**: o cliente que mais gastou em pedidos **pagos**. Se não houver pedido pago,
   retorne `null`. Em caso de empate, vale quem aparecer primeiro.

## Saída esperada para o exemplo

```ts
{
  totalRevenue: 750,
  countByStatus: { pending: 1, paid: 3, cancelled: 1 },
  topCustomer: 'Bruno'
}
```

## Casos de borda

- `summarizeOrders([])` deve retornar `totalRevenue: 0`, todos os status com 0 e `topCustomer: null`.
- Pedido com `items` vazio vale 0.

## O que será avaliado

- O resultado está certo, inclusive nos casos de borda.
- A tipagem: interface `OrderSummary` bem definida, sem `any`. Bônus se usar `Record<OrderStatus, number>`.
- A organização: funções auxiliares pequenas, como uma que calcula o total de um pedido.
- A legibilidade: nomes claros e uso de `reduce` / `filter` / `map` quando fizer sentido.

## Como rodar

Requer Node 22.18 ou mais recente (roda TypeScript direto, sem build).

```bash
cd challenges/order-summary
npm install        # instala só o TypeScript, para o typecheck
npm test           # roda os testes (começam falhando de propósito)
npm run test:watch # roda os testes a cada alteração
npm run typecheck  # confere a tipagem (sem any, interface correta)
npm start          # imprime o resumo do exemplo
```

`npm run typecheck` também vai apontar erros até você definir os campos de `OrderSummary`:
isso é esperado.
