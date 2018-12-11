export class Group {
  constructor(json_group: any) {
    this.id = json_group.id;
    this.members = json_group.members;
    this.name = json_group.name;
    this.priceLimit = json_group.priceLimit;
    this.groups = json_group.groups;
  }
  id: string;
  members: string[];
  name: string;
  priceLimit: number;
  groups: string[];
}
