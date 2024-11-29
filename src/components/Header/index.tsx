import React from 'react'
import { HeaderProps } from './types'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router';
import { useRouteInfo } from 'expo-router/build/hooks';
import { Pressable, Text, View } from 'react-native';
import { cn } from '../../utils';

const Header = (props: HeaderProps) => {
  const {
    className,
    ...rest
  } = props;

  const routeInfo = useRouteInfo();
  const showFavorites = routeInfo.pathname !== '/favorites';

  return (
    <View
      className={cn("flex flex-row items-center p-4", className)}
      {...rest}
    >
      {routeInfo.pathname !== '/'
        ? (<Pressable onPress={() => router.back()} className="p-2">
          <Ionicons name="chevron-back-outline" size={24} />
        </Pressable>)
        : <View className="w-10" />}
      <Text className="flex flex-1 font-bold overflow-hidden text-ellipsis line-clamp-1">
        {routeInfo.pathname === '/' ? 'home' : routeInfo.pathname.replace('/', '')}
      </Text>
      {showFavorites
        ? (<Link href="/favorites" className="p-2">
          <Ionicons name="bookmark" size={24} />
        </Link>)
        : <View className="w-10" />}
    </View>
  )
}

export default Header