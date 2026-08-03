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
- Property binding: `[src]`, `[disabled]`, `[hidden]`, `bind-*`
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

**Where:** `product-list`, `ratings`, `categories`, `category`, `cart`

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
- Sharing data across components (`UserInformation.getCurrentUser()`)
- Note: Angular uses `@Injectable`, not `@Service`

**Where:** `src/app/services/user-information.ts`, `login`, `logout`

---

### 10. CRUD & forms (Employee)
- Single-component CRUD: add / view / delete (modals, `ngModel`)
- Split CRUD (better design):
  - **Parent (`Employee2CRUD`)** owns `employees` array + all logic
  - **Child (`EmployeeTable`)** displays list, emits delete
  - **Child (`EmployeeAdd`)** form, emits new employee
- Spread operator `{...obj}` when emitting (send a copy, then clear form)
- Confirm delete, snackbar on add

**Where:** `employee-crud`, `employee2-crud`, `employee-table`, `employee-add`

---

### 11. Third-party libraries used in demos
- Bootstrap (layout / UI)
- Font Awesome icons
- SweetAlert2 (`Swal`)
- awesome-snackbar
- ngx-pagination

**Where:** `employee-crud`, `product-list`, `employee2-crud`

---

### 12. Small supporting ideas
- Constants file for messages (`MESSAGES.EMPLOYEE_ADDED`)
- Conditional rendering with `@if (flag)` to create/destroy components
- Standalone component imports vs NgModules (this project uses standalone)

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

---

## Extra notes

Personal teaching notes also live in [`NOTES.md`](./NOTES.md) (parent–child data flow cheatsheet).

Routing is set up (`app.routes.ts`) but routes are empty for now — not covered in depth yet.
