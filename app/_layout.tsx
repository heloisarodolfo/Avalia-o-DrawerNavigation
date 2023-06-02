//import { Drawer } from "expo-router";
import { Drawer } from "expo-router/drawer";


export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Index",
          title: "Bem-vindo",
        }}
      />
      <Drawer.Screen
        name="Home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />

    <Drawer.Screen
        name="Sobre" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Sobre",
          title: "Sobre",
          drawerItemStyle: { height: 0 }
        }}
      />

       <Drawer.Screen
        name="Cadastro" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Cadastro",
          title: "Cadastro",
          drawerItemStyle: { height: 0 }
        }}
      />


    </Drawer>
  );
}