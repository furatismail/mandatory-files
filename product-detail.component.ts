import { Component, OnInit } from '@angular/core';
import { lastValueFrom, take } from 'rxjs';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  todosPipe: any;
  todos: any;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  // PROMISE VARIANTA
  async getTodosAsync() {
    try {
      const todos = await lastValueFrom(this.todosService.getTodos());
      console.log(todos);
    } catch (error) {
      console.log('error', error)
    }

  }

  // OBSERVABLE VARIANTA - OBSERVABLE ROZBALUJEME POMOCI SUBSCRIBE
  async getTodosObs() {
    // v promenne todos je ted observable
    this.todos = this.todosService.getTodos().pipe(take(1)).subscribe(response => 
      console.log(response), 
      err => console.log('HTTP Error', err), 
      () => console.log('HTTP request completed.')
    )

    //UNSUBSCRIBE POTE VOLAME V LIFECYCLE HOOK ngOnDestroy()
  }

  // OBSERVABLE VARIANTA - OBSERVABLE MUZEME TAKE ROZBALIT NA TEMPLATE POMOCI | ASYNC
  async getTodosPipeAsync() {
    // v promenne todos je ted observable
    this.todosPipe = this.todosService.getTodos()
  }

  /// NE NIKDY - NEKOMBINOVAT PROMISE S OBSERVABLE. SPATNE SE TO TESTUJE. MUZE VEST K NEOCEKAVANYM VYSLEDKUM
  // async getTodosObs() {
  //   const myPromise = new Promise((resolve, reject) => {
  //     this.todosService.getTodos().subscribe(response => resolve(response))
  //   });
  //   const res = await myPromise;
  //   console.log(res)
  // }

  ngOnDestroy() {
    this.todos.unsubscribe();
  }

}
