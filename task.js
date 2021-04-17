///задание 1

function getObjFromNum(num) {
    const obj = {};

    num = (parseInt(num, 10));
    if (isNaN(num) || num > 999) {
      console.log('Вы ввели некорректное значение');
      return obj;
    }

    const numToStr = num.toString();
    switch (numToStr.length) {
      case 1:
        obj['единицы'] = numToStr;
        break;
      case 2:
        obj['единицы'] = numToStr[1];
        obj['десятки'] = numToStr[0];
        break;
      case 3:
        obj['единицы'] = numToStr[2];
        obj['десятки'] = numToStr[1];
        obj['сотни'] = numToStr[0];
        break;
    }

    return obj;
  }

  var num = prompt('Введите число от 0 до 999');

  alert(JSON.stringify(getObjFromNum(num)));


/// задание 2 

var product_1 = {product: "Товар 1", price : 500};
var product_2 = {product: "Товар 2", price : 400};
var product_3 = {product: "Товар 3", price : 300};
var product_4 = {product: "Товар 4", price : 200};

var store = {
    catalog : [product_1, product_2, product_3, product_4]
}

var basket = {
    products : [product_1, product_2],
    sum : 0,
    summ : function(){        
        for (i=0; i < this.products.length; i++)
            {
                this.sum += this.products[i].price;
            }
    }
}
basket.summ();
console.log (basket.sum)