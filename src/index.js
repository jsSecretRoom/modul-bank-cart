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
                    res = "Small subscription 1/12$";
                    break;
                case price2:
                    res = "Fair subscription 2/20$";
                    break;
                case price3:
                    res = "Economical subscription 4/30$";
                    break;
                case price4:
                    res = "Profitable subscription 6/40$";
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
});