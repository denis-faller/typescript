var CustomFile = /** @class */ (function () {
    function CustomFile(name, size) {
        this.name = name;
        this.size = size;
        if (CustomFile.isCustomFileTooBig(size)) {
            throw new Error('CustomFile is too big');
        }
    }
    CustomFile.isCustomFile = function (file) {
        return file instanceof CustomFile;
    };
    CustomFile.isCustomFileTooBig = function (size) {
        return size > CustomFile.maxCustomFileSize;
    };
    CustomFile.maxCustomFileSize = 1000;
    return CustomFile;
}());
CustomFile.isCustomFile(new CustomFile('open-world.jpeg', 1000)); // true
