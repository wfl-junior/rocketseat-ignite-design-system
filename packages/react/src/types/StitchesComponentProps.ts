export type StitchesComponentProps<T extends React.ComponentType> =
  React.ComponentProps<T> & {
    as?: React.ElementType;
  };
