Custom-Checkbox
===============

## Markup
Just a normal HTML checkbox wrapped in a label. So when a user has JavaScript disabled, you'll still have your normal checkbox.
```
<label>
    <span>My custom checkbox</span>
    <input type="checkbox" name="mycheckbox" class="custom-chk">
</label>
```

## Usage
Initializing the plugin:
```
$('.custom-chk').CustomCHK();
```

Settings:
* valueOn: the value for a checked checkbox (standard: 1)
* valueOff: the value for an unchecked checkbox (standard: 0)
* check: the plugin creates a button which represents the checkbox, when checked the 'check' (standard: <div class="custom-chk-check"></div>) is inserted inside the button. You can change this to your own check template.
