export interface INav<T> {
  navigate: (value: string, props?: T) => void;
  goBack: () => void;
}
