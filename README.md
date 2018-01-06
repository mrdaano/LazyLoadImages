# LazyLoadImage
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/mrdaano/LazyLoadImages/issues)
[![Github file size](https://img.shields.io/github/size/mrdaano/LazyLoadImages/LazyLoadImage.js.svg)]()

A small and simple library to lazy load images on your website. It uses the new IntersectionObserver API.

## Installation
Just download [LazyImageLoad.js](https://github.com/mrdaano/LazyLoadImages/blob/master/LazyLoadImage.js) to your code base.
## Usage
The javascript:
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
The following options can be passed to the constructor as an object: 
- **rootMargin**: (string) This specify the margin around each image. Default: ``'30px 0'``
- **threshold**: (number/array) Either a single number or an array of numbers between 0 and 1 which indicate at what percentage of the target's visibility the observer's callback should be executed. Default: ``0.1``
## Contributing
If you want to contribute to this project and make it better, your help is very welcome.
1. Set up a working copy on your computer `` git clone git@github.com:mrdaano/LazyLoadImages.git ``
2. Add some cool features or fix a issue
3. Commit it and make a pull request
### Want a Feature?
You can request a new feature by submitting an issue. If you would like to implement a new feature feel free to issue a Pull Request.
