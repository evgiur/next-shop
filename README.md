# next-shop
tech issue
1. We have some limited amount of goods
2. We can add/remove goods from basket
3. Goods are reserved when you add it to the basket and it can't be taken by someone other user (not forever)
4. When reserve is timeoff good is о истечении срока резервирования товар не исчезает из корзины но меняет статус и возможность его приобретения уже не гарантируется
также товары можно покупать, при этом они исчезают из магазина окончательно
данные храни в локальном хранилище браузера (чтоб можно было пользоваться сразу из нескольких вкладок, для тестирования, и чтобы перезагрузка не изменяла состояние)
неприменно используй какой ни будь стейт на основе стора реакта
