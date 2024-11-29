import React from 'react'
import { Image, Text, View } from 'react-native'
import { CommentProps } from './types';

const Comment = (props: CommentProps) => {
  const {
    avatar,
    name,
    comment,
    ...rest
  } = props;

  return (
    <View
      className="flex flex-1 p-4 flex-row gap-2"
      {...rest}
    >
      <Image
        source={{
          uri: avatar,
        }}
        borderRadius={16}
        width={32}
        height={32}
      />
      <View className="flex flex-1 flex-col">
        <Text className="text-semibold">
          {name}
        </Text>
        <Text className="text-[12px] text-gray-500">
          {comment}
        </Text>
      </View>
    </View>
  )
}

export default Comment