export interface BatchAction {
  label: string;
  value: string;
  icon: React.ComponentType;
  handler: (selectedIds: string[]) => void;
}