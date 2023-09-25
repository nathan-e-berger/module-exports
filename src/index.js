import { choice, remove } from './helpers';
import foods from './foods';

const randomFruit = choice(foods);
console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log('delicious may I have another');
remove(foods, randomFruit);
console.log(`Im sorry, we have ${foods.length} fruit left`);