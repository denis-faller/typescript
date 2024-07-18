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
    function CustomFile() {
    }
    CustomFile.isCustomFile = function (file) {
        return file instanceof CustomFile;
    };
    CustomFile.maxCustomFileSize = 1000;
    return CustomFile;
}());
var ImageCustomFile = /** @class */ (function (_super) {
    __extends(ImageCustomFile, _super);
    function ImageCustomFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageCustomFile.isCustomFile = function (file) {
        return file instanceof ImageCustomFile;
    };
    ImageCustomFile.maxCustomFileSize = 2000; // Error!
    return ImageCustomFile;
}(CustomFile));
