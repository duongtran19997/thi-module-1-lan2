class Rectangle {
    constructor(x, y, width, height, color) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color
        this._canvas = document.getElementById('canvas');
        this.pen = this._canvas.getContext('2d')
    }

    render() {
        this.pen.beginPath();
        this.pen.fillStyle = this._color;
        this.pen.fillRect(this._x, this._y, this._width, this._height)
        this.pen.stroke()
    }
}

let rectangle = new Rectangle(10, 10, 200, 100);
rectangle.render()

