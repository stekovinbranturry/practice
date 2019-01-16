function Cart() {
    this.products = [];
}

Cart.prototype = {
    calculate: function() {
        let sum = 0;
        this.products.forEach(function(e) {
            sum += e.price;
        });
        return sum;
    },
    getSum: function() {
        return this.products.length;
    },
    bindBasic: function() {
        $('.cartsum').html(this.getSum());
        $('#cartprice').html(this.calculate());
    },
    bindList: function() {
        let str = '';
        this.products.forEach(function(e) {
            str += `<div class="cart_box">
                    <div class="message">
                    <div class="alert-close"> </div>
                    <div class="list_img"><img src="${e.image[0].smallImg}" class="img-responsive" alt=""/></div>
                    <div class="list_desc"><h4><a href="#">${e.pname}</a></h4>1 x<span class="actual">
                $${e.price}</span></div>
                    <div class="clearfix"></div>
                    </div>
                </div>`;
            $('.shopping_cart').html(str);
        });

    }

}
