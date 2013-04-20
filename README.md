#Rint.ScrollAnimtaion

`ScrollAnimtaion` is scroll animation helper. dependencies with jQuery Library.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="Rint.ScrollAnimation.js"></script>
```

#Basic Use
```html
<div class="row">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
```

#event
```javascript
ScrollAnimation.create('rotateX', 0, 400, function (value) {
    $('.row').css('transform', createRotateTransform(x = value));
});

ScrollAnimation.create('rotateZ', 100, 700, function (value) {
    $('.row').css('transform', createRotateTransform(z = value));
});

ScrollAnimation.create('rotateY', 400, 800, function (value) {
    $('.row').css('transform', createRotateTransform(y = value));
});

ScrollAnimation.create('radius', 0, 800, function (value) {
    $('.row').css('transform', createRotateTransform());
});

ScrollAnimation.create('circle', 0, 800, function (value) {
    $('.box').css({
        background: createColor(),
        transform: 'rotateY(' + value * 720 + 'deg)'
    });
});
```
#Static method

```javascript
ScrollAnimation.play(0, 800, 1, 1);
```
