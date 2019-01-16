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
    this.image = [{ smallImg: '', largeImg: '' }, { smallImg: '', largeImg: '' }, { smallImg: '', largeImg: '' }];
}

Product.prototype = {
    /*绑定基本信息*/
    bindBasic: function() {
        $('#pname').html(this.pname);
        $('#buyCount').html(this.buyCount);
        $('#price').html(this.price);
        $('#groupPrice').html(this.groupPrice);
        $('#description').html(this.description);
    },
    /*绑定图片列表*/
    bindImages: function() {
        let str = '';
        this.image.forEach(function(element) {
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

}
