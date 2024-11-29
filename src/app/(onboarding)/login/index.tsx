import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import PageContainer from "../../../components/PageContainer";
import { supabase } from "../../../utils/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email && password;

  const onSignInButtonPress = async () => {
    if (!isValid) return;

    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const onEmailChange = (text: string) => setEmail(text);
  const onPasswordChange = (text: string) => setPassword(text);

  return (
    <PageContainer>
      <View className="flex h-1/3 space-y-2 items-center justify-center">
        <Text className="font-bold text-6xl text-center">Hey, welcome back!</Text>
        <Text className="font-normal text-2xl text-gray-500 text-center">
          Log in with your email and password!
        </Text>
      </View>
      <View className="flex h-2/3 space-y-8 w-full self-center">
        <TextInput
          className="w-full h-12 bg-neutral-200 rounded-lg p-4"
          placeholder="Correo electrónico"
          placeholderTextColor="gray"
          returnKeyType="done"
          onChangeText={onEmailChange}
        />
        <TextInput
          secureTextEntry
          className="w-full h-12 bg-neutral-200 rounded-lg p-4"
          placeholder="Contraseña"
          placeholderTextColor="gray"
          returnKeyType="done"
          onChangeText={onPasswordChange}
        />
        <Pressable
          className="w-full rounded-full p-4 bg-blue-300"
          disabled={!isValid}
          onPress={onSignInButtonPress}
        >
          Log in
        </Pressable>
      </View>
    </PageContainer>
  );
};

export default Login;
