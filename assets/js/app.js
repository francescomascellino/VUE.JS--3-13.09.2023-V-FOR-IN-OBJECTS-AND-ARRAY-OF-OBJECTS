const { createApp } = Vue

createApp({
    data() {
        return {

            object: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },

            objectArr: [
                {
                    title: 'How to do lists in Vue',
                    author: 'Jane Doe',
                    publishedAt: '2016-04-10'
                },

                {
                    title: 'How to understand v-for',
                    author: 'Myself',
                    publishedAt: '2023-09-13'
                },

            ]

        }
    },

    methods: {

    }

}).mount('#app')