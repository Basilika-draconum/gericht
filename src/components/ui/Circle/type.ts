export enum CircleClass {
  ClassRight = "classRight",
  ClassLeft = "classLeft",
}
export interface CircleProps {
  currentClass: CircleClass;
  className?: string;
}
