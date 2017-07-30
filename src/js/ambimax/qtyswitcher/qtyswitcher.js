/**
 * Qty Switcher for Magento adds buttons to every qty input field for easier adjustments on tablets and smartphones
 *
 * @author      Tobias Schifftner <ts@ambimax.de>, ambimax® GmbH
 * @copyright   2016 ambimax® GmbH
 * @website     https://www.ambimax.de
 * @licence     MIT
 * @codingStandardsIgnoreFile
 */
qtyswitcher={
    /**
     * Init qty switcher
     *
     * @param _config
     */
    init:function(_config){

        // set config
        this.config = _config;

        // add html
        this.addQtyButtonsHtml();

        // Add observer
        $$('.qty-minus').each(function(element) {
            element.observe('click', qtyswitcher.decreaseQty);
        });
        $$('.qty-plus').each(function(element) {
            element.observe('click', qtyswitcher.increaseQty);
        });
    },
    /**
     * Add qty switcher html
     */
    addQtyButtonsHtml: function() {
        $$('.qty').each(function(qtyElement){
            qtyElement.insert({
                before: '<button type="button" title="' + qtyswitcher.config.minusButtonLabel + '" class="button qty-minus" value="-"><span><span>-</span></span></button>',
                after: '<button type="button" title="' + qtyswitcher.config.plusButtonLabel + '" class="button qty-plus" value="+"><span><span>+</span></span></button>'
            });
        });
    },
    /**
     * Update qty form input
     *
     * @param qtyElement
     * @param buttonElement
     * @param qty
     * @returns {qtyswitcher}
     */
    updateQty: function(qtyElement, buttonElement, qty) {
        qtyElement.value = qty > 0 ? qty : 0;
        // qtyElement.writeAttribute('value', qty);
        return this;
    },
    /**
     * Increase qty by 1
     *
     * @returns {qtyswitcher}
     */
    increaseQty: function () {
        var qtyElement = $(this).previous('input.qty');

        if(qtyElement) {
            qtyswitcher.updateQty(qtyElement, $(this), ++qtyElement.value);
        }

        return this;
    },
    /**
     * Decrease qty by 1
     *
     * @returns {qtyswitcher}
     */
    decreaseQty: function () {
        var qtyElement = $(this).next('input.qty');

        if(qtyElement) {
            qtyswitcher.updateQty(qtyElement, $(this), --qtyElement.value);
        }

        return this;
    }
};