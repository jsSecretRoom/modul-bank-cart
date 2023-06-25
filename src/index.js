window.addEventListener('DOMContentLoaded', function(){
  function bancCard(price1, price2, price3, price4, backButton, creditBlock, textNavigator) {
    const prices = [price1, price2, price3, price4, backButton];
        
    prices.forEach(function(element) {
      document.querySelector(element).addEventListener('click', function(event) {
        event.preventDefault();
  
        const flipContainer = document.querySelector(creditBlock);
        flipContainer.classList.toggle('flipped');
  
        const hideShovBtn = document.querySelector(backButton);
        hideShovBtn.classList.toggle('show');
  
        let res;
        
        switch (element) {
            case price1:
                res = "Small subscription 1h/12$";
                break;
            case price2:
                res = "Fair subscription 2h/20$";
                break;
            case price3:
                res = "Economical subscription 4h/30$";
                break;
            case price4:
                res = "Profitable subscription 6h/40$";
                break;
            case backButton:
                res = "Wrap subscription type!";
                break;
            default:
                res = "Неизвестная кнопка";
        }

        const textNav = document.querySelector(textNavigator);
        textNav.innerText = res;
        
      });
    });
  }
      
    bancCard('.price1', '.price2', '.price3', '.price4', '.back-reverse', '.block-credit', '.todu-navigator');

    function formOperation(form, ...fields) {
      const myForm = document.querySelector(form);
        myForm.addEventListener('submit', function(e) {
          e.preventDefault();
      
          const formData = {};
          let hasErrors = false; // Флаг для отслеживания ошибок
      
          fields.forEach(field => {
            const inputElement = document.querySelector(field);
            const value = inputElement.value;
            formData[field] = value; // Assign the value to the corresponding property in formData
            
            // Валидация поля
            if (value.trim() === '') {
              hasErrors = true;
              inputElement.classList.add('error');
            } else {
              inputElement.classList.remove('error');
            }
          });
      
          if (hasErrors) {
            console.log('Форма содержит ошибки. Отправка формы отменена.');
            return; // Прерываем выполнение функции, если есть ошибки
          }
      
          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(data => {
            console.log('Данные успешно отправлены на сервер:', data);
          })
          .catch(error => {
            console.error('Произошла ошибка:', error);
          });
        });
    }

  formOperation('.myform', '#cart-number', '#data-cart', '#svc-cod', '#user-naim', '#user-email', '#user-country', '#user-city', '#city-postcode');

});