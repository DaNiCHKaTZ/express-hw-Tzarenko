Проект на Express.js для выполнения домашнего задания 1 уровня.

## Описание

Приложение на Node.js с использованием Express.js, предоставляющее базовые эндпоинты для проверки работоспособности сервера.

## Установка

1. Склонировать репозиторий:
```bash
git clone https://github.com/DaNiCHKaTZ/express-hw-Tzarenko.git
cd express-hw-Tzarenko
```

2. Установить зависимости:
```bash
npm install
```
3. Запуск
### Обычный запуск
```bash
npm start
```
### Запуск с nodemon
```bash
npm run dev
```

## API Endpoints

### GET /

Возвращает сообщение о работоспособности сервера.

**Пример запроса:**
```bash
curl http://localhost:3000/
```

**Пример ответа:**
```json
{
  "message": "OK"
}
```
**Код ответа:** `200 OK`

### GET /status

Возвращает JSON с состоянием и временем сервера.

**Пример запроса:**
```bash
curl http://localhost:3000/status
```

**Пример ответа:**
```json
{
  "status": "OK",
  "time": "2024-01-15T10:30:45.123Z"
}
```

