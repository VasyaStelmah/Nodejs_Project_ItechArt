// Создаём новый объект, затем через прототип делаем его наследником конструктора Error.
function errorMessage(message, status) {
  this.name = "Error";
  this.message = message || "Сообщение по умолчанию";
  this.stack = new Error().stack;
  this.status = status || "Error";
}
errorMessage.prototype = Object.create(Error.prototype);
errorMessage.prototype.constructor = errorMessage;

module.exports = errorMessage;
