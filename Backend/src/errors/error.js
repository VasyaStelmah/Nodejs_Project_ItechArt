// Создаём новый объект, затем через прототип делаем его наследником конструктора Error.
function MyError(message, status) {
    this.name = 'Error';
    this.message = message || 'Сообщение по умолчанию';
    this.stack = (new Error()).stack;
    this.status = status || 'Error';
  }
  MyError.prototype = Object.create(Error.prototype);
  MyError.prototype.constructor = MyError;
  
//   try {
//     throw new MyError();
//   } catch (e) {
//     console.log(e.name);     // 'MyError'
//     console.log(e.message);  // 'Сообщение по умолчанию'
//   }
  
//   try {
//     throw new MyError('пользовательское сообщение');
//   } catch (e) {
//     console.log(e.name);     // 'MyError'
//     console.log(e.message);  // 'пользовательское сообщение'

// }
  module.exports = MyError;