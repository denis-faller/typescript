function stopProgram(message) {
    throw new Error(message);
}
function exit(code) {
    if (code === void 0) { code = 0; }
    process.exit(code);
}