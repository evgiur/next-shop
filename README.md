# next-shop
tech issue
1. We have some limited amount of goods
2. We can add/remove goods from basket
3. Goods are reserved when you add it to the basket and it can't be taken by someone other user (not forever)
4. When time of reserve is expired then product is steel in the basket but chenge it state
5. When the product is purchased, it is removed from the store
данные храни в локальном хранилище браузера (чтоб можно было пользоваться сразу из нескольких вкладок, для тестирования, и чтобы перезагрузка не изменяла состояние)
неприменно используй какой ни будь стейт на основе стора реакта
