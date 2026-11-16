# OmniHopper

Редизайн сайта omnihopper.com.

## Impeccable

В проект установлен дизайн-скилл [Impeccable](https://github.com/pbakaus/impeccable) v4.9.2 для Claude Code:

- `.claude/skills/impeccable/` — скилл (`/impeccable …`, 24 команды) и справочные плейбуки
- `.claude/agents/` — субагенты Impeccable
- `.claude/settings.json` — хуки детектора: проверяют каждую правку UI

Движок скачивается один раз при первом запуске в `~/.impeccable/bin/` и проверяется по контрольным суммам.
Обновление: `npx impeccable update` в корне проекта.

Начать: открыть папку проекта в Claude Code и выполнить `/impeccable init`.
