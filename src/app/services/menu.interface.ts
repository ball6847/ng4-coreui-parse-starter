export type MenuItems = Array<MenuItem | MenuSection>;

export class MenuItem {
  public isCallback: boolean = false;
  public readonly type = 'item';

  constructor(
    public name: string,
    public navigate: any[] | (() => any) = null,
    public icon: string | string[] | Set<string> | { [klass: string]: any } = null,
    public children: MenuItems = []
  ) {
    this.isCallback = typeof navigate === 'function';
  }

  add(item: MenuItem | MenuSection) {
    this.children.push(item);
  }
}

export class MenuSection {
  public readonly type = 'section';

  constructor(public name: string) { }
}

