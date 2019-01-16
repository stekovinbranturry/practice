/*使用对象 搭积木*/

/*绑定产品*/

window.onload = function () {
    let product = new Product();
    product.pname = 'HM休闲服登山包33';
    product.buyCount = 100;
    product.price = 10000;
    product.groupPrice = 100;
    product.description = '棒棒的，棒棒的，登山一流，服务一流，你好，我好，他也好，太棒了，一口气等上珠穆朗玛峰';
    /*数据结构*/
    product.image = [
        { smallImg: '../images/s11.jpg', largeImg: '../images/s11.jpg' },
        { smallImg: '../images/s12.jpg', largeImg: '../images/s12.jpg' },
        { smallImg: '../images/s13.jpg', largeImg: '../images/s13.jpg' }];
    product.init();

    /*绑定购物车*/

    let cart = new Cart();
    $('#btnaddcart').on('click', function () {
        cart.products.push(product);
        cart.bindBasic();
        cart.bindList();
        $(window).scrollTop(0);
    });

}