LineTest.js
===========

jQuery plugin that adds asterisks as guides to fine tune the length of text lines. By default it defines a min width of 45 characters and a max width of 75.

This plugin is inspired by Trent Walton's post about fluid type and his method to test and adjust text containers.
http://trentwalton.com/2012/06/19/fluid-type/

How to use
------

Include jQuery and jquery.linetest.js on your page and apply it to your paragraphs.

```html
<script src="jquery.linetest.js"></script>
<script>
	$(function() {
		$('p').lineTest();
	})
</script>
```

NOTE: This plugin will remove all html markup in your paragraphs to make a clean character count. Since it's only meant to be used for development, it shouldn't be a problem ;)

Customization
------

LineTest.js allows some custom options:
* `min` - Minimum character length for your lines. Default: 45
* `max` - Max character length for your lines. Default: 75
* `character` - Changes de default asterisk marker.
* `color` - Color of the asterisks. Default: "#f00" (red).

Example:

```javascript
$.lineTest({
	min: 40,
	max: 50,
	character: '#',
	color: '#00f'
});
```