// App.tsx
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";
import Logo from "@/assets/vue.svg";
export default defineComponent({
   name: "App",
   components: { HelloWorld },
   setup() {
     return () => (
       <>
         <img alt="Vue logo" src={Logo} />
         <HelloWorld msg="Hello Vue 3 + Vite" />
       </>
     );
   },
});