#Rint.ScrollAnimtaion

`Rint.ScrollAnimtaion` is scroll animation helper. dependencies with jQuery Library.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="Rint.ScrollAnimation.js"></script>
```

#Basic Use
```html
<body>
    <h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1>
    <h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1>
    <h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1>
    <h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1>
    <h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1><h1>AAA</h1>
    <style>
      h1 { position: relative; }
    </style>
    <script>
        var scrollAnimation = new Rint.ScrollAnimation({
            from: 0,
            to: 1000,
            onprogress: function (value) {
                $('h1').css('left', 1000 * value)
            }
        });
    </script>
</body>
```

#event
```javascript
var scrollAnimation = new Rint.ScrollAnimation({
    from: 0, to: 1000,
    onprogress: function (/* from 0 to 1*/value) { }
});
```
```javascript
var scrollAnimation = new Rint.ScrollAnimation({ from: 0, to: 1000 });
scrollAnimation.setOnProgressListener(function (value) { })
```

#import Method
Rint.ScrollAnimataion.import() method

```javascript
Rint.ScrollAnimation.import();

new ScrollAnimtaion({
  from: 0,
  to: 1000,
  onprogress: function (value) {
    console.log(value);
  }
});
```

#Static method

```javascript
Rint.ScrollAnimation.play('slow')
Rint.ScrollAnimation.play('normal')
Rint.ScrollAnimation.play('fast')
Rint.ScrollAnimation.play(/* Distance per Frame */2)
```

#Instance method
```javascript
var scrollAnimation = new Rint.ScrollAnimation({
  from: 0,
  to: 1000,
  onprogress: function (value) {
    console.log(value);
  }
});

scrollAnimation.setFrom(100);
scrollAnimation.setTo(2000);
```
