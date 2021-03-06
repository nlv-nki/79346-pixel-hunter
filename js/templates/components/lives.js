/**
 * Created by yulia on 27.11.2016.
 */
import AbstractView from '../../abstractView';
export default class LivesView extends AbstractView {
  getMarkup() {
    const fullElement = '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
    const emptyElement = '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
    const TOTAL_LIVES = 3;

    let content = '';
    for (let j = 0; j < TOTAL_LIVES - this.data; j++) {
      content += emptyElement;
    }
    for (let i = 0; i < this.data; i++) {
      content += fullElement;
    }
    return `<div class="game__lives">
      ${content}
    </div>`;
  }
}
