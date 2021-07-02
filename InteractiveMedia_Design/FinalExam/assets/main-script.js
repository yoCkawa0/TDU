function createApp() {
    new Vue({
        el: "#timetableapp",
        data: {
            currentTabIndex: 0,
            tabs: [{
                    id: "senju",
                    name: "東京千住キャンパス",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodilaboriosam aut earum, quia modi deleniti officia perspiciatis aliquamomnis.A alias, velit aut at dolorum animi molestiae aliquid ipsamaxime ? ",
                },
                {
                    id: "hatoyama",
                    name: "鳩山キャンパス",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integerenim diam, laoreet a nisi id, bibendum congue orci. Nullam id auctorelit, non sollicitudin est. Quisque rutrum, nulla a aliquamfacilisis, tellus ligula pellentesque Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer enim diam, laoreet a nisi id,bibendum congue orci. Nullam id auctor elit, non sollicitudin est. Quisque rutrum, nulla a aliquam facilisis, tellus ligula pellentesque Lorem ipsum dolor sit amet, consectetur adipiscingelit. Integer enim diam, laoreet a nisi id, bibendum congue orci. Nullam id auctor elit, non sollicitudin est. Quisque rutrum, nulla a aliquam facilisis, tellus ligula pellentesque",
                    // foo: '<p class="text-left m-5 diplay-3">電大のリアルを体感する！ < br / > 学科・ 学系の違いがハッキリわかる！ </p>'
                },
            ]
        },
        computed: {
            currentTabContent() {
                return this.tabs[this.currentTabIndex].content
            }
        },
        methods: {
            onClick(index) {
                this.currentTabIndex = index
                // if (index = hatoyama) {
                //     this.display = true
                // }
            }
        },
    })
}

function initialize() {
    createApp()
}
document.addEventListener("DOMContentLoaded", initialize.bind(this))