function Product() {
    /*pname*/
    this.pname = '';
    /*buyCount*/
    this.buyCount = 0;
    /*price*/
    this.price = 0;
    /*groupPrice*/
    this.groupPrice = 0;
    /*description*/
    this.description = '';
    /*image*/
    this.image = [{ smallImg: '', largeImg: '' },
                  { smallImg: '', largeImg: '' },
                  { smallImg: '', largeImg: '' }];

    Object.defineProperty(this, 'price', {
        get: function() {
            return price * 0.9;
        },
        set: function(v) {
            (v > 1000) ? alert('傻逼吧？') : price = v;
        }
    });
    let that = this;
    /*绑定基本信息*/
    this.config = {
        domPname: document.querySelector('#pname'),
        domBuyCount: document.querySelector('#buyCount'),
        domPrice: document.querySelector('#price'),
        domGroupPrice: document.querySelector('#groupPrice'),
        domDescription: document.querySelector('#description')
    }
    function bindBasic() {
        that.config.domPname.innerHTML = that.pname;
        that.config.domBuyCount.innerHTML = that.buyCount;
        that.config.domPrice.innerHTML = that.price;
        that.config.domGroupPrice.innerHTML = that.groupPrice;
        that.config.domDescription.innerHTML = that.description;
    }
    /*绑定图片列表*/
    function bindImages() {
        let str = '';
        that.image.forEach(function(element) {
            str += `<li>
                        <img class="etalage_thumb_image" src="${element.smallImg}" class="img-responsive" />
                        <img class="etalage_source_image" src="${element.largeImg}" class="img-responsive" />
                    </li>`;
            // console.log(str);
        });

        str += `<div class="clearfix"></div>`;
        // console.log(str);
        $('.etalage').html(str);

        /*jquery 插件*/
        $('#etalage').etalage({
            thumb_image_width: 250,
            thumb_image_height: 300
        });
    }
    this.init = function(){
        bindBasic();
        bindImages();
    }
}
