# Installing, running and using

- `git clone https://github.com/1nspir3d/nodejs-rest-api.git`
- `git checkout dev`
- `npm install`
- Start in dev mode - `npm run start:dev`
- Start in prod mode - `npm run start:prod`

## После этого у вас должен запустится кластер <br/>с соответствующим сообщением в консоли. <br/>Для тестирования приложения, пожалуйста, используйте [Postman](https://link-url-here.org)

## Методы, которые ожидают от вас данные `(POST, PUT)`, <br/>должны получать их в виде `JSON` объекта. <br/>С тем как это делать можете ознакомится [здесь](https://www.youtube.com/watch?v=qyYAOty_bDs)

## Обратите также внимание на то, что база данных реализована через объект,<br/>а не массив, так как в ТЗ не было конкретных условий.

## Так же обратите внимание на то, что при `start:prod` у вас будет версия без кластера, так как в ТЗ кластер упоминали только в контексте `start:multi`
