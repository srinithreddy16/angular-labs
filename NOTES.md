# Angular Learning Notes

## Parent–Child Components

- **Parent** = component that hosts other components in its HTML
- **Child** = component placed inside the parent template
- **Siblings** = children of the same parent (they do not talk directly)

---

## Data Flow

### 1. Parent → Child (Input)

- Parent sends data with property binding: `[inputName]="value"`
- Child declares input: `inputs: ['inputName']`
- Child also needs a matching property on the class

```ts
// child.ts
inputs: ['employees'],
employees: any[] = [];
```

```html
<!-- parent.html -->
<app-employee-table [employees]="employees"></app-employee-table>
```

### 2. Child → Parent (Output / EventEmitter)

- Child creates an `EventEmitter` and lists it in `outputs`
- Child calls `.emit(data)` (usually on button click)
- Parent listens: `(eventName)="handler($event)"`
- Parent stores the value in a `.ts` property, then shows it in HTML

```ts
// child.ts
outputs: ['courseNameEvent'],
courseNameEvent = new EventEmitter<string>();

sendDataToParent() {
  this.courseNameEvent.emit(this.courseName);
}
```

```html
<!-- parent.html -->
<app-child2-demo (courseNameEvent)="receiveDataFromChild($event)"></app-child2-demo>
```

### 3. Sibling (Child2 → Child1)

Always goes through the parent:

**Child2 → Parent (output)** then **Parent → Child1 (input)**

---

## Template Reference (`#child2`)

- Parent can tag a child: `#child2`
- Parent HTML can read child properties: `{{ child2.b }}`
- Parent can also pass that to another child: `[b]="child2.b"`

---

## Importing a Child into a Parent

Standalone Angular components must import children before using their tags:

```ts
import { EmployeeTable } from '../employee-table/employee-table';

@Component({
  imports: [EmployeeTable],
})
```

Path `'../employee-table/employee-table'` means: go up one folder, then into that component file.

To show a component on the page, also add its tag in `body.html` and import it in `body.ts`.

---

## Employee CRUD Assignment (plan)

- **EmployeeCRUD (parent)** – holds `employees` array + all logic
- **EmployeeTable (child)** – receives employees, shows table, delete button emits to parent
- **EmployeeAdd (child)** – form; emits new employee to parent
- All add/delete functions stay in the **parent**

---

## Quick Cheatsheet

| Direction | Syntax | Example |
|-----------|--------|---------|
| Down | `[...]` | `[employees]="employees"` |
| Up | `(...)` | `(courseNameEvent)="receive($event)"` |
| Ref | `#name` | `#child2` then `child2.b` |

---

## My Notes

(Add your own notes below)

/*
  PARENT -> CHILD DATA FLOW NOTES
  --------------------------------
  1. DATA OWNERSHIP
     - employees array lives in the PARENT (Employee2CRUD).
     - Child (EmployeeTable) does NOT own the data, just receives it.

  2. WHY IMPORT THE CHILD IN PARENT?
     - <app-employee-table> is a custom tag, browser doesn't understand it.
     - Angular needs to know which class this tag maps to.
     - import { EmployeeTable } from '...'  -> makes the tag usable
     - imports: [EmployeeTable] in @Component -> allowed to use it in template
     - Import = "I can use this tag in my HTML"
     - Import has NOTHING to do with sending data.

  3. HOW DATA IS SENT (Parent -> Child)
     - Parent html: <app-employee-table [employees]="employees"></app-employee-table>
     - Child ts:     inputs: ['employees']  (or @Input() employees: any[] = [];)
     - This is the actual data-passing step, separate from the import step.

  4. WHO RENDERS THE TABLE?
     - The <table>, <tr>, @for loop etc. all live in CHILD's own html (employee-table.html).
     - Parent does NOT contain any table markup.
     - Child decides HOW to display the data it received.

  5. WHY DOES IT LOOK LIKE IT'S "INSIDE" THE PARENT PAGE?
     - Wherever <app-employee-table> is placed in parent's html,
       that's where child's rendered output visually appears.
     - Visual placement = decided by parent (where the tag sits)
     - Rendering logic  = owned by child (how the tag's content looks)

  SUMMARY:
     Import  -> lets parent USE the child tag
     @Input  -> lets parent SEND data to child
     Child's own html -> DISPLAYS that data
     Parent's html position -> decides WHERE it shows up on screen
*/

-
-
-
