const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: "Ciao sono un messaggio all’interno di un h1, utilizzando i data.",
            srcImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbjzwp7EDVXHfqEKSh3bqeWEaomuzMXXbhQ&usqp=CAU",
            username: "",
        }
    }
});

app.mount("#app");