# AngularProject

Training project used to teach Angular (standalone components, Angular 21).

## Run the app

```bash
npm install
ng serve
```

Open `http://localhost:4200/`.

```bash
ng generate component component-name
ng build
ng test
```

---

## Topics covered so far

### 1. Angular basics & project structure
- Angular CLI project setup
- Standalone components (`@Component`, `imports` array)
- App shell layout: `Navbar`, `Categories`, `Carousel`, `Body`, `Footer`
- How to generate and register a component in a parent (`body.ts` + `body.html`)

**Where:** `src/app/app.ts`, `src/app/app.html`, `src/app/components/*`

---

### 2. Data binding
- Interpolation: `{{ value }}`
- Property binding: `[src]`, `[disabled]`, `[hidden]`
- Event binding: `(click)`
- Two-way binding: `[(ngModel)]` with `FormsModule`
- Assignments: show/hide, dropdown selection, password toggle, counter, Celsius → Fahrenheit, calculator, color picker

**Where:** `src/app/components/databinding/`

---

### 3. Directives
- Structural (old): `*ngIf`, `*ngFor`
- New control flow (Angular 17+): `@if` / `@else`, `@for`, `@switch` / `@case` / `@default`, `@empty`
- Attribute directives: `ngStyle`, `ngClass`
- Content projection: `<ng-content>`
- Custom attribute directives:
  - `appCharonly` — `@HostListener` / `@HostBinding`
  - `appDisableCopyPaste`

**Where:** `src/app/components/directives-demo/`, `src/app/directives/`

---

### 4. Pipes
- Built-in: `uppercase`, `lowercase`, `titlecase`, `currency`, `date`, `json`, `slice`, `number`, `percent`
- Custom pipes (`@Pipe`, `PipeTransform`):
  - `RemainingPipe`
  - `OrdinalPipe`
  - `CreditcardPipe`
  - `AgePipe`
  - `SalutationPipe`
  - `MysortPipe`
  - `FilterSearchPipe`

**Where:** `src/app/components/pipe-demo/`, `src/app/pipes/`

---

### 5. Components & UI demos
- Product list: search, sort, pagination (`ngx-pagination`), Font Awesome
- Ratings component (star UI)
- Categories / Category (parent passes data to child cards)
- Cart component
- Password generator (length, character options, copy to clipboard)

**Where:** `product-list`, `ratings`, `categories`, `category`, `cart`, `password-generator`

---

### 6. Parent–child communication
- **Parent → Child (Input):** `[property]="value"`, `inputs: [...]`
- **Child → Parent (Output):** `EventEmitter`, `outputs: [...]`, `(event)="handler($event)"`
- **Sibling communication:** Child2 → Parent → Child1 (no direct sibling talk)
- Importing child components into parent `imports: []`

**Where:** `parent-demo`, `child1-demo`, `child2-demo`, `NOTES.md`

---

### 7. Template reference variables & ViewChild
- Template ref in HTML: `#child2`, `#myInputBox`
- Reading child data in parent template: `{{ child2.b }}`
- `@ViewChild('refName')` in TypeScript
- Why ViewChild is used in `ngAfterViewInit` (not ready in constructor / `ngOnInit`)
- DOM access example: change input background, call `.focus()`

**Where:** `parent-demo`

---

### 8. Component lifecycle hooks
- `constructor`
- `ngOnChanges`
- `ngOnInit`
- `ngDoCheck`
- `ngAfterContentInit` / `ngAfterContentChecked`
- `ngAfterViewInit` / `ngAfterViewChecked`
- `ngOnDestroy` — cleanup (`clearInterval`, stop leftover work)
- Demo: toggle Login / Logout with `@if` so destroy runs

**Where:** `parent-demo`, `child1-demo`, `login`, `logout`, `body` (`flag` + Toggle)

---

### 9. Services & dependency injection
- Creating a service with `@Injectable({ providedIn: 'root' })`
- Injecting via constructor DI
- Injecting via `inject()`
- Sharing data across components (`UserInformation.getCurrentUser()`, `getUserRole()`)
- Employee / Product HTTP services

**Where:** `src/app/services/`

---

### 10. CRUD & forms (Employee)
- Single-component CRUD: add / view / delete (modals, `ngModel`)
- Split CRUD (better design):
  - **Parent (`Employee2CRUD`)** owns `employees` array + all logic
  - **Child (`EmployeeTable`)** displays list, emits delete
  - **Child (`EmployeeAdd`)** form, emits new employee
- Spread operator `{...obj}` when emitting (send a copy, then clear form)
- Confirm delete, snackbar on add
- Later employee demos with services / HTTP (`employee3`, `employee4`, `employee-list-http2`)

**Where:** `employee-crud`, `employee2-crud`, `employee-table`, `employee-add`, `employee3`, `employee4`

---

### 11. HTTP & RxJS Observables
- `HttpClient` + `provideHttpClient`
- Fetching lists from APIs (products, comments, users, employees)
- Loading state with signals
- Operators: `forkJoin`, `mergeMap`, `concatMap`
- Subjects: `Subject`, `BehaviorSubject`, `ReplaySubject`, `AsyncSubject`

**Where:** `observable-demo1`–`4`, `subject-demo1`, `product-list-http`, `comment-list`, `user-details`

---

### 12. HTTP interceptors
- Functional interceptors with `withInterceptors([...])`
- Auth interceptor
- Retry interceptor
- Error interceptor

**Where:** `src/app/interceptors/`, `app.config.ts`

---

### 13. Angular Signals
- Writable signals: `signal()`, `.set()`, `.update()`
- Reading signals in templates: `value()`
- `computed()` for derived state
- `linkedSignal()` for dependent state
- Signals + HTTP (fetch user by id)
- Todo list with completed / remaining computed lists

**Where:** `signal-demo1`–`5`

---

### 14. Forms
- Template-driven forms (`ngModel`, `NgForm`, validation)
- Reactive / model-driven forms (`FormGroup`, `FormControl`)
- Dynamic forms
- Registration form
- Signal forms API (`form()`, `FormField`, `required`, `email`, `validate`)
- Signal form validation (password match)

**Where:** `form-demo1`, `template-form`, `model-form`, `dynamic-form`, `registration-form`, `signal-form`, `signal-form-validation`, `contactus`

---

### 15. Routing
- `Routes` config + `provideRouter`
- `routerLink` / `routerLinkActive`
- Default route (`''`) and wildcard (`**`) → Notfound
- Nested / child routes (Careers → Permanent / Contract + nested `router-outlet`)
- Route params: `userdetails/:id` + `ActivatedRoute`
- Query params: product details (`id`, `title`, `price`)
- Programmatic navigation: `Router.navigateByUrl()`, `Location.back()` / `forward()`
- Navbar icons with Font Awesome for route links

**Where:** `app.routes.ts`, `navbar`, `careers`, `aboutus`, `user-list`, `user-details`, `product-details`

---

### 16. Route guards
- `canActivate` — role-based access (`trainerGuard` for upload videos)
- `canDeactivate` — block leave when form has unsaved changes (`canExitGuard` on contactus)

**Where:** `src/app/guards/`, `upload-videos`, `contactus`

---

### 17. Lazy loading & deferred loading
- Route-level lazy loading with `loadComponent` + dynamic `import()` (Product list)
- Component-level deferred loading with `@defer` / `@placeholder`
- Dynamic component load with `NgComponentOutlet` + `import()` (Heavy component on Home)

**Where:** `app.routes.ts` (`products`), `home`, `heavy-component`

---

### 18. Third-party libraries used in demos
- Bootstrap (layout / UI)
- Font Awesome icons
- SweetAlert2 (`Swal`)
- awesome-snackbar
- ngx-pagination

**Where:** `employee-crud`, `product-list`, `employee2-crud`, `navbar`

---

### 19. Small supporting ideas
- Constants file for messages (`MESSAGES.EMPLOYEE_ADDED`)
- Conditional rendering with `@if (flag)` to create/destroy components
- Standalone component imports vs NgModules (this project uses standalone)
- Static data files (`product_data`, `user_data`)

---

## Suggested learning order (for the team)

1. Project structure + components  
2. Data binding  
3. Directives + control flow  
4. Pipes (built-in → custom)  
5. Parent–child Inputs / Outputs  
6. Template refs + ViewChild  
7. Lifecycle hooks (+ `ngOnDestroy` cleanup)  
8. Services + DI  
9. Employee CRUD split (parent owns logic)  
10. HTTP + Observables + Subjects  
11. Interceptors  
12. Signals  
13. Forms (template → reactive → signal forms)  
14. Routing + nested routes + params / query params  
15. Guards (`canActivate` / `canDeactivate`)  
16. Lazy loading + `@defer`

---

## Extra notes

Personal teaching notes also live in [`NOTES.md`](./NOTES.md) (parent–child data flow cheatsheet).

Many practice demos live under `body.html` (often commented while focusing on routing). Routed pages are reached from the navbar: Home, About, Careers, Contact, Users, Products, Upload Videos.
