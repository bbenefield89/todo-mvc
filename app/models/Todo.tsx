const min = 100_000;
const max = 999_999;

export type Todo = {
  id: number;
  title: string;
  isComplete: boolean;
}

export const GenerateTodo = (
  title: string,
  id: number = Math.floor(Math.random() * (max - min + 1)) - min,
  isComplete: boolean = false
): Todo => {
  return { id, title, isComplete };
};
