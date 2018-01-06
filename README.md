# LazyLoadImage

A small and simple library to lazy load images on your website. It uses the new IntersectionObserver API.

## Installation
## Usage
```javascript
import LazyLoadImage from '{PATH TO SCRIPT}'

new LazyLoadImage({opts})
```
In your div or img tag in html add the class ``js-lazyload-image`` and a new data attribute ``data-src=""``. Example:
```html
<img src="#" class="js-lazyload-image" data-src="https://example.com/image.jpg" alt="A image">
```
You can checkout a full example in the [example](https://github.com/mrdaano/LazyLoadImages/tree/master/example) folder
### Options
Comming soon