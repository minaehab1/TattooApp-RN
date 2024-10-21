declare module 'nativewind' {
  import { ViewProps, TextProps, ImageProps, TouchableOpacityProps, ScrollViewProps } from 'react-native';

  export function styled<T extends React.ComponentType<any>>(component: T): T & {
    new (props: React.ComponentProps<T> & { className?: string }): React.ReactElement;
  };
}
