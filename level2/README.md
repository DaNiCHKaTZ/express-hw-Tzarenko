Проект на Express.js для выполнения домашнего задания 2 уровня.

## Описание

Приложение на Node.js с использованием Express.js, предоставляющее базовые CRUD операции для сущности note.

## Установка

1. Склонировать репозиторий:
```bash
git clone https://github.com/DaNiCHKaTZ/express-hw-Tzarenko.git
cd express-hw-Tzarenko/level2
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

### GET /note

Возвращает список всех заметок.

**Пример запроса:**
```bash
curl http://localhost:3000/note
```

**Пример ответа:**
```json
[
  {
    "id": "1701427200000",
    "title": "Test",
    "description": "Something",
    "createdAt": "2025-12-01T10:00:00.000Z"
  }
]
```
**Код ответа:** `200 OK`

### GET /notes/:id

Возвращает одну заметку по id.

**Параметры:**
- `id` (string) - идентификатор заметки

**Пример запроса:**
```bash
curl http://localhost:3000/notes/1701427200000
```

**Пример ответа:**
```json
{
    "id": "1701427200000",
    "title": "Test",
    "description": "Something",
    "createdAt": "2025-12-01T10:00:00.000Z"
  }
```
**Код ответа:** `200 OK`

**Ошибки:**
- `404 Not Found` - если заметка с указанным id не найдена

### POST /notes

Создает новую заметку.

**Тело запроса:**
```json
{
  "title": "New node",
  "description": "Desription"
}
```

**Параметры:**
- `title` (string, обязательный) - заголовок заметки, от 1 до 100 символов
- `description` (string, опциональный) - описание заметки, до 500 символов

**Пример запроса:**
```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "New node", "description": "Desription"}'
```

**Пример ответа:**
```json
{
  "id": "1701427200000",
  "title": "New node",
  "description": "Desription",
  "createdAt": "2025-12-01T10:00:00.000Z"
}
```
**Код ответа:** `201 Created`

**Ошибки:**
- `400 Bad Request` - если данные некорректны (title обязателен, длина title от 1 до 100 символов, длина description до 500 символов)

### PUT /notes/:id

Полностью обновляет заметку по идентификатору.

**Параметры:**
- `id` (string) - идентификатор заметки

**Тело запроса:**
```json
{
  "title": "Update",
  "description": "update qwfqwfwqfsqf"
}
```

**Пример запроса:**
```bash
curl -X PUT http://localhost:3000/notes/1701427200000 \
  -H "Content-Type: application/json" \
  -d '{"title": "Update", "description": "update qwfqwfwqfsqf"}'
```

**Пример ответа:**
```json
{
  "id": "1701427200000",
  "title": "Update",
  "description": "update qwfqwfwqfsqf",
  "createdAt": "2025-12-01T10:00:00.000Z"
}
```
**Код ответа:** `200 OK`

**Ошибки:**
- `400 Bad Request` - если данные некорректны
- `404 Not Found` - если заметка с указанным id не найдена

### PATCH /notes/:id

Частично обновляет заметку по идентификатору.

**Параметры:**
- `id` (string) - идентификатор заметки

**Тело запроса:**
```json
{
  "title": "NEwqdqwf wqfqfw"
}
```
или
```json
{
  "description": "wegwegwewegw"
}
```

**Пример запроса:**
```bash
curl -X PATCH http://localhost:3000/notes/1701427200000 \
  -H "Content-Type: application/json" \
  -d '{"title": "NEwqdqwf wqfqfw"}'
```

**Пример ответа:**
```json
{
  "id": "1701427200000",
  "title": "NEwqdqwf wqfqfw"",
  "description": "Старое описание",
  "createdAt": "2025-12-01T10:00:00.000Z"
}
```
**Код ответа:** `200 OK`

**Ошибки:**
- `400 Bad Request` - если данные некорректны
- `404 Not Found` - если заметка с указанным id не найдена

### DELETE /notes/:id

Удаляет заметку по идентификатору.

**Параметры:**
- `id` (string) - идентификатор заметки

**Пример запроса:**
```bash
curl -X DELETE http://localhost:3000/notes/1701427200000
```

**Код ответа:** `204 No Content`

**Ошибки:**
- `404 Not Found` - если заметка с указанным id не найдена