//Custom Checkbox jQuery plugin
;(function ( $, window, document, undefined ) {
    var pluginName = "CustomCHK",
        defaults = {
            check: '<div class="custom-chk-check"></div>',
            valueOn: 1,
            valueOff: 0
        };

    // The actual plugin constructor
    function Plugin(el, options ) {
        this.el = el;
        this.$el = $(el);
        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var checked = this.$el.is(':checked')?true:false;

            this.$el.attr('type', 'hidden');
            this.$btn = $('<button class="custom-chk-btn"></button>').insertBefore(this.$el);
            this.$btn.on('click', $.proxy(function(e){
                e.preventDefault();
                this.toggle(this.$el, this.options);
            }, this));

            if(checked){
                this.turnOn(this.$el, this.options);
            }
        },
        toggle: function($el, options){
            if($el.val()==options.valueOn){
                this.turnOff($el, options);
            }else{
                this.turnOn($el, options);
            }
            $el.trigger('custom-chk-change', $el.val());
        },
        turnOn: function($el, options) {
            this.$btn.html(options.check);
            $el.val(options.valueOn);
        },
        turnOff: function($el, options){
            this.$btn.html('');
            $el.val(options.valueOff);
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );
