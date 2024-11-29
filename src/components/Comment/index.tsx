import React from 'react'
import { Image, Text, View } from 'react-native'
import { CommentProps } from './types';

const Comment = (props: CommentProps) => {
  const {
    avatar,
    comment,
    firstname,
    lastname,
    email,
    phone,
    ...rest
  } = props;

  return (
    <View
      className="flex flex-1 p-4 gap-2"
      {...rest}
    >
      <View className="flex flex-row gap-2">
        <Image
          source={{
            uri: avatar,
          }}
          borderRadius={16}
          width={32}
          height={32}
          testID='avatar'
        />
        <View className="flex flex-1 flex-col">
          <Text className="text-semibold" testID="user-data">
            {firstname} {lastname}, {email}, {phone}
          </Text>
          <Text className="text-[12px] text-gray-500">
            {comment}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Comment