class EventEmitter<T extends Record<string, (...args: any[]) => void>> {
  on<K extends keyof T>(event: K, handler: T[K]): void {
    // Implement here
  }

  emit<K extends keyof T>(event: K, ...args: Parameters<T[K]>): void {
    // Implement here
  }
}

interface Events {
  click: (x: number, y: number) => void;
  change: (value: string) => void;
}

const emitter = new EventEmitter<Events>();
emitter.on("click", (x, y) => console.log(x, y));
emitter.emit("click", 10, 20); // Valid
emitter.emit("change", "new value"); // Valid
