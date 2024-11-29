import { Slot } from "expo-router";

import "../../global.css";
import PageContainer from "../components/PageContainer";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <PageContainer>
      <Header />
      <Slot />
    </PageContainer>
  );
}
