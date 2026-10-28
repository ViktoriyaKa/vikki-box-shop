# Vikki Box Shop

Сайт и все картинки бренда: логотип, шапка ВК, каталог, сторис, посты.  
Всё лежит **в этой папке на диске**. Заявки с формы заказа сохраняются только в браузере (localStorage), не в облаке.

Локальная папка:

`C:\Users\Vika_2005\vikkibox`

## Как положить проект на компьютер (Windows + WSL)

Origin CLI работает в WSL, не в PowerShell.

```bash
# Run in WSL (Origin CLI is not available in PowerShell)
# Install the Origin CLI
curl -fsSL https://downloads.cursor.com/origin/install.sh | sh

# Sign in (also sets up git credentials)
origin auth login

# Clone into the local folder
mkdir -p /mnt/c/Users/Vika_2005/vikkibox
origin repo clone vikki083/vikki-box-shop-logo /mnt/c/Users/Vika_2005/vikkibox
```

Если команда `origin` не находится:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Документация Origin CLI: https://cursor.com/docs/origin/cli  
Страница репозитория: https://cursor.com/codebase/vikki083/vikki-box-shop-logo

## Как запустить сайт

В PowerShell или в WSL из папки проекта:

```bash
cd C:\Users\Vika_2005\vikkibox
npm install
npm run dev
```

Откройте [http://localhost:43173](http://localhost:43173).

## Что где лежит

| Путь | Что внутри |
| --- | --- |
| `public/brand/` | Логотип |
| `public/hero/` | Шапка сайта и обложка |
| `public/vk/` | Варианты шапки ВК |
| `public/products/` | Фото боксов каталога |
| `public/stories/` | Сторис 9:16: форма заказа и прайс |
| `public/posts/` | Посты и обложки (квадрат и 9:16) |
| `archive/` | Черновики и архив диалога |
| `src/data/products.ts` | Названия, цены, состав |
| браузер, localStorage | Заявки со страницы «Заказать» |

Новый бокс: картинка в `public/products/`, карточка в `src/data/products.ts`.
