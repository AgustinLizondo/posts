import React from 'react';
import { SafeAreaView } from 'react-native';
import { PageContainerProps } from './types';
import { cn } from '../../utils';

const PageContainer = (props: PageContainerProps) => {
  const {
    children,
    className,
    ...rest
  } = props;

  return (
    <SafeAreaView
      className={cn("flex flex-1", className)}
      testID="container"
      {...rest}
    >
      {children}
    </SafeAreaView>
  )
}

export default PageContainer