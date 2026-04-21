# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

lint, test 설정 없음.

---

## Performance Target

**Lighthouse 전 항목 90점 이상** 유지를 기준으로 한다 (Performance, Accessibility, Best Practices, SEO).

코드 변경 시 아래 사항을 준수한다:
- 이미지: `width`/`height` 명시, `loading="lazy"` 적용, WebP 우선
- 외부 리소스 (폰트 등): `<link rel="preconnect">` 추가
- 렌더 블로킹 최소화: 스크립트는 `defer` 또는 동적 import
- 불필요한 리렌더 방지: `useMemo` / `useCallback` 남용 금지, 필요한 경우에만 사용
- 접근성: 모든 인터랙티브 요소에 `aria-label` 또는 텍스트 레이블 확보

---

## Tech Stack

| 분류 | 기술 |
|------|------|
| UI | React 19, TypeScript 5.8 |
| 번들러 | Vite 6 |
| 스타일 | 단일 `index.css` (CSS 변수 기반 테마) |
| 상태 관리 | React Context API (전역 상태 3개) |
| i18n | 커스텀 `IntlContext` — `locales/*.json` 런타임 fetch |
| 라우팅 | 없음 — 커스텀 `NavigationContext`로 페이지 상태 관리 |
| 타입 | ES2022 target, `moduleResolution: bundler`, `@` alias → 프로젝트 루트 |

---

## Architecture

### 네비게이션 (라우터 없음)

URL 라우터를 사용하지 않는다. `NavigationContext`가 `page` 문자열 상태(`'home'`, `'projects'`, `'about'`)를 관리하고, `PageTransition` 컴포넌트가 해당 페이지 컴포넌트를 렌더링하면서 CSS 슬라이드 애니메이션을 구동한다.

페이지 전환 시간은 **500ms** — `NavigationContext.tsx`의 `setTimeout`과 `index.css`의 애니메이션 duration이 반드시 동기화되어야 한다.

### Provider 중첩 순서 (`App.tsx`)

```
ThemeProvider
  └─ IntlProvider          ← 로케일 파일 로드 완료 전까지 children을 null 렌더
       └─ NavigationProvider
```

### i18n 패턴

- `t('키')` 로 모든 텍스트 조회. 일부 키는 배열을 반환함 (예: `home.techStack.proficient.items`).
- `locales/*.json`은 **flat 구조** — 중첩 객체가 아니라 도트 표기법 문자열이 JSON 키로 사용됨.  
  (`t('home.title')` → `messages['home.title']` 직접 조회, `messages.home.title` 아님)
- 로케일 파일: `locales/{locale}.json` — `import.meta.env.BASE_URL`을 prefix로 붙여 fetch (GitHub Pages 배포 경로 대응).
- 기본 언어: `'en'`, fallback도 `'en'`.

### 빌드 / 배포 설정 (`vite.config.ts`)

- `base: '/Developer-Portfolio/'` — GitHub Pages 서브디렉토리 배포용. 변경 시 CI 배포 설정도 함께 수정 필요.
- `viteStaticCopy` 플러그인으로 `locales/*`를 `dist/locales/`로 복사 — Vite가 `fetch()`로만 참조되는 파일을 자동 포함하지 않기 때문에 필수.

### 경력 데이터 (`data/index.ts`)

로케일에 따라 **다른 데이터 구조**를 사용한다:

| 로케일 | 데이터 | 구조 |
|--------|--------|------|
| `en`, `de` | `enDeExperiencesData` (`SimpleExperience[]`) | 회사 단위 flat |
| `ko` | `companyExperiencesData` (`CompanyExperience[]`) | 회사 → 프로젝트 nested |

한국어 데이터의 i18n 키는 `_ko` suffix를 가진다 (예: `"experience.goorm.company_ko"`).

### 테마 시스템

- 기본값: `dark`. `localStorage`에 영속.
- `body`에 `dark-theme` / `light-theme` 클래스를 부착하여 CSS 변수로 색상 제어.
- 핵심 변수: `--background-color`, `--text-color`, `--border-color`, `--tag-bg-color` 등 (`index.css` `:root` 참고).

### 커스텀 커서

`cursor: none`이 전역 적용됨. `a`, `button`, `[data-interactive]` 요소에 hover 시 커서가 확장된다. **클릭 가능한 커스텀 요소에는 반드시 `data-interactive` 속성을 추가**해야 한다.

### 이력서

- `ko` 로케일: `public/resume_ko.pdf` (로컬 파일, 직접 다운로드)
- 그 외 로케일: 외부 Google Docs URL (`AboutPage.tsx`에 하드코딩)

---

## Coding Conventions

- **컴포넌트**: 함수형 컴포넌트 + named export. `React.FC` 타입 미사용, 반환 타입 명시 없음.
- **스타일**: 인라인 스타일은 동적 값에만 한정 사용 (예: `maxHeight` 애니메이션). 나머지는 CSS 클래스.
- **CSS 클래스 토글**: 조건부 렌더링보다 클래스명 토글 선호 (`expanded`, `visible`, `active` 등).
- **이벤트 핸들러**: `href="#"` anchor 클릭 시 반드시 `e.preventDefault()` 호출.
- **i18n 키 네이밍**: `섹션.엔티티.속성` 점 표기법. 한국어 전용 키는 `_ko` suffix.
- **파일**: 페이지는 `pages/`, 재사용 UI는 `components/`, 전역 상태는 `context/`.
- **Import 순서**: React → 서드파티 → 내부 context → 내부 components/data → 타입.
