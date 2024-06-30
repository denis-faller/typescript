const point: [number, number] = [1, 3];
// Можно поменять
point[0] = 4;

type HTTPResponse = [number, string];

// Порядок определения важен
const response: HTTPResponse = [404, 'Page is not found'];