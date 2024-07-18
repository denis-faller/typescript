var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CustomFile = /** @class */ (function () {
    function CustomFile(name, size) {
        this.name = name;
        this.size = size;
    }
    return CustomFile;
}());
var ImageCustomFile = /** @class */ (function (_super) {
    __extends(ImageCustomFile, _super);
    function ImageCustomFile(name, size, width, height) {
        var _this = _super.call(this, name, size) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    return ImageCustomFile;
}(CustomFile));
var CustomFileFactory = /** @class */ (function () {
    function CustomFileFactory() {
    }
    CustomFileFactory.prototype.createCustomFile = function (name, size) {
        return new CustomFile(name, size);
    };
    return CustomFileFactory;
}());
var ImageCustomFileFactory1 = /** @class */ (function (_super) {
    __extends(ImageCustomFileFactory1, _super);
    function ImageCustomFileFactory1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageCustomFileFactory1.prototype.createCustomFile = function (name, size) {
        return new ImageCustomFile(name, size, 100, 100);
    };
    return ImageCustomFileFactory1;
}(CustomFileFactory));
var ImageCustomFileFactory2 = /** @class */ (function (_super) {
    __extends(ImageCustomFileFactory2, _super);
    function ImageCustomFileFactory2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageCustomFileFactory2.prototype.createCustomFile = function (name, size) {
        return new ImageCustomFile(name, size, 100, 100);
    };
    return ImageCustomFileFactory2;
}(CustomFileFactory));
var ImageCustomFileFactory3 = /** @class */ (function (_super) {
    __extends(ImageCustomFileFactory3, _super);
    function ImageCustomFileFactory3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageCustomFileFactory3.prototype.createCustomFile = function (name, size) {
        return new ImageCustomFile(name, size, 100, 100);
    };
    return ImageCustomFileFactory3;
}(CustomFileFactory));
var ImageCustomFileFactory3 = /** @class */ (function (_super) {
    __extends(ImageCustomFileFactory3, _super);
    function ImageCustomFileFactory3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageCustomFileFactory3.prototype.createCustomFile = function (name, size) {
        return new ImageCustomFile(name, size, 100, 100);
    };
    return ImageCustomFileFactory3;
}(CustomFileFactory));
