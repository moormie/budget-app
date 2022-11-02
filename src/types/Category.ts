interface CategoryColor {
  primary: string;
  secondary?: string;
}

export interface Category {
  id?: string;
  name: string;
  color: CategoryColor;
}
