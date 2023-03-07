let inputWidth;
let inputHeight;

inputWidth = prompt("Nhap chieu dai hinh chu nhat:");
inputHeight = prompt("Nhap chieu cao hinh chu nhat:");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;
document.write('dien tich hinh chu nhat la' + area);