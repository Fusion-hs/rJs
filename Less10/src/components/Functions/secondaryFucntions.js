export const totalPriceItems = order => { 

    const countTopping = order.toppings ? order.toppings.filter(item => item.checked).length : 0;
    const orderPrice = order.price * order.count;
    const toppingPrice = orderPrice * countTopping * 0.1;

    return orderPrice + toppingPrice;
}
export const formatCurrency = value => value.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});