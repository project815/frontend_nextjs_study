import type { Maybe } from "graphql/jsutils/Maybe";
import type { IBoardReturn } from "../../../../commons/types/generated/types";

export interface IBoardWritePropsType {
  isEdit: boolean;
  defaultValue?: Maybe<IBoardReturn>;
}
export interface IBoardWriteUIPropsType {
  onClick: () => void;
  onChangeWriter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  defaultValue?: any;
}
export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}
