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
    CustomFile.prototype.sizeInKb = function () {
        return this.size / 1024;
    };
    return CustomFile;
}());
var ImageCustomFile = /** @class */ (function (_super) {
    __extends(ImageCustomFile, _super);
    function ImageCustomFile(name, size) {
        return _super.call(this, name, size) || this;
    }
    return ImageCustomFile;
}(CustomFile));
