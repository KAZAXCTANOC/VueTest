
// создание корневого компонента (тоже самео что и точка входа в приложение)
import { createApp } from 'vue'
import App from './App'
import components from "@/components/UI"

const app = createApp(App); 

components.forEach(com => {
    app.component(com.name, com)
});

app.mount('#app')
