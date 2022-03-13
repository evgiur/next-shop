# next-shop
tech issue
1. We have some limited amount of goods
2. We can add/remove goods from cart
3. Goods are reserved (for a limited time) when you add it to the cart and it can't be taken by someone other user
4. When time of reserve is expired then product is steel in the cart but chenge it state
5. When the product is purchased, it is removed from the store
данные храни в локальном хранилище браузера (чтоб можно было пользоваться сразу из нескольких вкладок, для тестирования, и чтобы перезагрузка не изменяла состояние)
неприменно используй какой ни будь стейт на основе стора реакта
