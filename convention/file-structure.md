# Folders

```
- apps
--- docs
--- admin
--- student
- packages
--- configs
--- eslint-config
--- typescript-config
--- ui
```

# Files

** The filename should be written in `kebab-case' **

```
User.ts => bad
user.ts => good

loginCard.ts => bad
LoginCard.ts => bad
login-card.ts => good
```

** Add a suffix depending on what is in the files **

```
UserComponent.ts => bad
user-component.ts => bad
user.component.ts => good

// Good another examples:
user.style.ts
user.saga.ts
user.slice.ts
```

** `index.ts` should only have re-exports **

```ts
export * from './user.component'
export { default: LoginComponent } from './login.component'
```

# Components

** Components must be declared in PascalCase **

```tsx
<UserComponent />
```

# Hooks

** custom hooks are written in PascalCase starting with the use prefix **

```ts
const useUserProps;
```

# Import

** `alias` should be used as much as possible in `imports` **
