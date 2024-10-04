# Тестовое задание Frontend в Langame

[Live-версия](https://langame-test-frontend.vercel.app)

### Инструкция по локальному запуску

1) Склонируйте репозиторий через SSH
```bash
git clone git@github.com:mikhailmogilnikov/langame-test-frontend.git
```

2) Перейдите в директорию проекта
```bash
cd langame-test-frontend
```

3) Установите зависимости
```bash
npm install
```

4) Соберите проект
```bash
npm run build
```

5) Запустите проект
```bash
npm run start
```

#### Решение будет доступно после запуска на `localhost:3000`

### Особенности

- Самописный сборщик на Webpack
- Настроенный линтер
- Прекоммит и препуш хуки (autolint, autoprettier, autobuild)
- Подключен CI (Github Actions)
- Архитектура FSD
- Стек: TypeScript, React, Tailwind CSS
- Оптимизации бандла (Chunk-splitting, Tree Shaking) 
- Оптимизация CSS (PostCSS + Autoprefixer)

### Дополнительно

Посмотреть размер собранного бандла в расширенном формате
```bash
npm run build:analyze
```

Запустить проект в dev-режиме
```bash
npm run dev
```

Запустить проверку линтера
```bash
npm run lint
```


