declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // Use Record<string, unknown> and unknown to avoid empty-object and any lint rules
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}
