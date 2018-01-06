class LazyLoadImage {
    static get SUPPORTS_OBSERVER() {
        return ('IntersectionObserver' in window)
    }

    static get HANDLED_CLASS() {
        return 'js-lazyload-handled'
    }

    constructor(opts = {}) {
        const images = document.querySelectorAll('.js-lazyload-image')

        if (!LazyLoadImage.SUPPORTS_OBSERVER) {
            this._loadAll(images)
            return
        }

        const config = {
            rootMarign: opts.rootMarign || '30px 0px',
            threshold: opts.threshold || 0.01
        }

        this._onIntersect = this._onIntersect.bind(this)

        this._observer = new IntersectionObserver(this._onIntersect, config)
        this._itemsToObserve = images.length

        images.forEach(image => {
            if (image.classList.contains(LazyLoadImage.HANDLED_CLASS)) {
                this._itemsToObserve--
                return
            }

            this._observer.observe(image)
        })
    }

    _onIntersect(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio <= 0) return

            this._itemsToObserve--
            this._observer.unobserve(entry.target)
            this._loadImage(entry.target)
        })

        if (this._itemsToObserve == 0) {
            this._observer.disconnect()
        }
    }

    _loadAll(images) {
        Array.from(images).forEach(image => this._loadImage(image))
    }

    _loadImage(img) {
        const src = img.dataset.src

        if (!src) return

        this._preLoadImage(src).then(_ => this._setImage(img, src))
    }

    _preLoadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image()

            img.src = src
            img.onload = resolve
            img.onerror = reject
        })
    }

    _setImage(img, src) {
        if (img.nodeName.toLowerCase() === 'img') {
            img.src = src
        } else {
            img.style.backgroundImage = `url(${src})`
        }

        img.classList.add(LazyLoadImage.HANDLED_CLASS)
    }
}

export default LazyLoadImage