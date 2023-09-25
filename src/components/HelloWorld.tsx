import { PropType, defineComponent} from "vue";
const Props = {
  msg: {
    type: String as PropType<string>,
    required: true
  }
} as const

export default defineComponent({
  name: "HelloWorld",
  props: Props,
  setup() {
    return () => (
      <>
       HelloWorld
      </>
    );
  },
})