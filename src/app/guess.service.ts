import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GuessService {
  constructor() {}

  /**
   *
   * @param obj any json obj
   *
   * console logs the html of component
   *
   * <div class="card" style="width: 18rem;">
   *  <img src="..." class="card-img-top" alt="...">
   *  <div class="card-body">
   *   <h5 class="card-title">Card title</h5>
   *   <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
   *   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   *   <a href="#" class="btn btn-primary">Go somewhere</a>
   *  </div>
   * </div>
   */
  guessCard(obj: any): any {
    const keys = Object.keys(obj);
    console.log(keys);
    const title = 'name';
    const subtitle = 'username';
    const email = 'email';
    const html = `
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{d.${title}}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{d.${subtitle}}}</h6>
      <p class="card-text">{{d.${email}}}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
    `;
    console.log(html);
    return html;
  }
}
