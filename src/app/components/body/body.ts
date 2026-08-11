import { Component } from '@angular/core';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipeDemo } from '../pipe-demo/pipe-demo';
import { Ratings } from '../ratings/ratings';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Categories } from "../categories/categories";
import { Employee2CRUD } from '../employee2-crud/employee2-crud';
import { Login } from '../login/login';
import { Logout } from '../logout/logout';
import { Employee3 } from '../employee3/employee3';
import { CommentList } from '../comment-list/comment-list';
import { Employee4 } from '../employee4/employee4';
import { ProductListHttp } from '../product-list-http/product-list-http';
import { EmployeeListHttp2 } from '../employee-list-http2/employee-list-http2';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservabaleDemo2 } from '../observabale-demo2/observabale-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { ObservableDemo4 } from '../observable-demo4/observable-demo4';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { SignalDemo3 } from '../signal-demo3/signal-demo3';
import { SignalDemo4 } from '../signal-demo4/signal-demo4';
import { SignalDemo5 } from '../signal-demo5/signal-demo5';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateForm } from '../template-form/template-form';
import { ModelForm } from '../model-form/model-form';
@Component({
  selector: 'app-body',
  imports: [EmployeeCRUD, PipeDemo, Ratings, ParentDemo, Categories, Employee2CRUD, Login, Logout, Employee3, CommentList, Employee4, ProductListHttp, EmployeeListHttp2, ObservabaleDemo2, ObservableDemo1, ObservableDemo3, ObservableDemo4, SubjectDemo1, SignalDemo1, SignalDemo2, SignalDemo3, SignalDemo4, SignalDemo5, FormDemo1, TemplateForm, ModelForm],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag = true;
}
