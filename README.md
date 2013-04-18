Custom-Checkbox
===============

## Markup
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
