Custom-Checkbox
===============

## Markup
Include jQuery and the plugin javascript file.
```html
<script src="js/vendor/jquery-1.9.1.min.js"></script>
<script src="js/custom-chk.min.js"></script>
```

Just a normal HTML checkbox wrapped in a label. So when a user has JavaScript disabled, you'll still have your normal checkbox.
```html
<label>
    <span>My custom checkbox</span>
    <input type="checkbox" name="mycheckbox" class="custom-chk">
</label>
```

## Usage
###Initializing the plugin:
```javascript
$('.custom-chk').CustomCHK();
```

### Settings:
* valueOn: the value for a checked checkbox (standard: 1)
* valueOff: the value for an unchecked checkbox (standard: 0)
* check: the plugin creates a button which represents the checkbox, when checked the 'check' (standard: ```<div class="custom-chk-check"></div>```) is inserted inside the button. You can change this to your markup.

```javascript
$('.custom-chk').CustomCHK({
    valueOn: "on",
    valueOff: "off",
    check: "<div class="custom-chk-check"><div class="inner-check"></div></div>"
});
```
## Change event
When the state of the checkbox changes, it fires a custom jquery event. You can bind an event handler to your checkbox like this:

```javascript
$('.custom-chk').on('custom-chk-change', function(e, val){
    //val = current value
});
```
Or if you have a lot of checkboxes, delegate those events:
```javascript
//put an event handler to a parent container ('body' for example)
//and delegate the change events for your checkboxes
$('body').on('custom-chk-change', '.custom-chk', function(e, val){
    //val = current value
});
```
## Styling
The plugin turns your HTML checkbox in a button. If checked, a standard div is inserted inside the button with the class '.custom-chk-check'.
Style these as you wish, the standard css is this:
```css
.custom-chk-btn{
    border: 1px solid #D7DEDA; 
    border-radius: 3px;
    outline: none;
    width: 28px;
    height: 28px;
    background: #FFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    margin-left: 20px;
    position: relative;
}

.custom-chk-check{
    position: absolute;
    width: 26px;
    height: 22px;
    background: url(../img/check.png) no-repeat;
    border-radius: 3px;
    top: 0px;
    left: 3px;
}
```
