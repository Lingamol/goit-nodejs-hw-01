# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list https://monosnap.com/file/zFv50pJp671pwlLC6sOS6SdJGbcdLt

# Получаем контакт по id

node index.js --action get --id 5 https://monosnap.com/file/BHUAGjgiWBKFKCMMWh8MnnEMVAxJLl

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/gosPIVkcxTuy9aQQphHtPaegFWhk79

# Удаляем контакт

node index.js --action remove --id=3 https://monosnap.com/file/bn8UjUe5Wc3ZyYzhwweGAvy2oQsCio
