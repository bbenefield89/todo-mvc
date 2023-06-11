interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

class Todo implements ITodo {
  private _id: number;
  private _title: string;
  private _isComplete: boolean;

  constructor(id: number, title: string, isComplete: boolean) {
    this._id = id;
    this._title = title;
    this._isComplete = isComplete;
  };

  public get id(): number {
    return this._id;
  };

  public set id(value: number) {
    this._id = value;
  };

  public get title(): string {
    return this._title;
  };

  public set title(value: string) {
    this._title = value;
  };

  public get isComplete(): boolean {
    return this._isComplete;
  };

  public set isComplete(value: boolean) {
    this._isComplete = value;
  };
};

export default Todo;