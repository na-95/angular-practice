import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TwoWayBindingChildComponent } from './components/two-way-binding-child/two-way-binding-child.component';
import { DynamicFormPageComponent } from './components/dynamic-form-page/dynamic-form-page.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { NgContentParentComponent } from './components/ng-content-parent/ng-content-parent.component';
import { NgContentChildComponent } from './components/ng-content-child/ng-content-child.component';
import { FluidTabsComponent } from './components/fluid-tabs/fluid-tabs.component';
import { NotionComponent } from './components/notion/notion.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DebounceComponent } from './components/debounce/debounce.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    TestComponent,
    ChildOneComponent,
    ChildTwoComponent,
    TwoWayBindingComponent,
    TwoWayBindingChildComponent,
    DynamicFormPageComponent,
    FormControlComponent,
    NgContentParentComponent,
    NgContentChildComponent,
    FluidTabsComponent,
    NotionComponent,
    ReactiveFormComponent,
    DebounceComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
