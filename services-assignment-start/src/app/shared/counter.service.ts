export class CounterService {
  countActive: number = 0;
  countInactive: number = 0;

  updateCountToInactive() {
    this.countInactive++;
  }

  updateCountToActive() {
    this.countActive++;
  }
}
