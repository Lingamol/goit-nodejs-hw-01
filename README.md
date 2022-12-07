# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list https://monosnap.com/file/Hrc2hfy1cINMK8aTbpCxCaJnGKetyp

# Получаем контакт по id

node index.js --action get --id 5 https://monosnap.com/file/O5Dbx7hyfZQvPqFGDgjrWbKIcpfJcF

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/BxQnsEnMyGxY9QkmCZcUxAK5IaVmzL

# Удаляем контакт

node index.js --action remove --id=3 https://monosnap.com/file/cOteNW4id0XIp1Xw1l5kXBcNO96tt0
