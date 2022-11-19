new Vue ({
    el:"#app",
    data:{
        contacts: [
            {
            name: 'Michele',
            avatar: 'img/avatar_1.jpg',
            lastMessage: ["Ultimo accesso oggi alle ",
            "Online",
            "sta scrivendo..."],
            lastMessageIndex: 0,
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            menuVisibility: false,
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: 'img/avatar_2.jpg',
            lastMessage: ["Ultimo accesso oggi alle ",
            "Online",
            "sta scrivendo..."],
            lastMessageIndex: 0,
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            menuVisibility: false,
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: 'img/avatar_3.jpg',
            lastMessage: ["Ultimo accesso oggi alle ",
            "Online",
            "sta scrivendo..."],
            lastMessageIndex: 0,
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            menuVisibility: false,
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            menuVisibility: false,
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: 'img/avatar_4.jpg',
            lastMessage: ["Ultimo accesso oggi alle ",
            "Online",
            "sta scrivendo..."],
            lastMessageIndex: 0,
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            menuVisibility: false,
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: 'img/avatar_5.jpg',
            lastMessage: ["Ultimo accesso oggi alle ",
            "Online",
            "sta scrivendo..."],
            lastMessageIndex: 0,
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            menuVisibility: false,
            status: 'received'
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: 'img/avatar_6.jpg',
            lastMessage: ["Ultimo accesso oggi alle ",
            "Online",
            "sta scrivendo..."],
            lastMessageIndex: 0,
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            menuVisibility: false,
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            }
            ],
            },
            {
            name: 'Federico',
            avatar: 'img/avatar_7.jpg',
            lastMessage: ["Ultimo accesso oggi alle ",
            "Online",
            "sta scrivendo..."],
            lastMessageIndex: 0,
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            menuVisibility: false,
            status: 'received'
            }
            ],
            },
            {
            name: 'Davide',
            avatar: 'img/avatar_8.jpg',
            lastMessage: ["Ultimo accesso oggi alle ",
            "Online",
            "sta scrivendo..."],
            lastMessageIndex: 0,
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            menuVisibility: false,
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            menuVisibility: false,
            status: 'sent',
            visualized: true,
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            menuVisibility: false,
            status: 'received'
            }
            ],
            }
        ],
        selectedIndex: -1,
        newMessage: '',
        filterName: '',
        arrMessage: ["E noi qui a parlare di fica", 
        "Le ali di terra che volano da te",
        "Da me o farfallina che muovendo le ali sbaronella",
        "Ma tu l'abbracci?",
        "Te la devi scopa'",
        "E che cos'è l'amore",
        "Un secchio pieno di passione",
        "Un'opera d'acqua"],
        showOptions: false,
        showSendImg: false,
        showChatMenu: false,
        loading: true,
        darkTheme: false,
        fontSize: 18,
    },
    methods:{
        openChat(index) {
            this.selectedIndex = index
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min
        },
        currentDate() {
            current = new Date();
            cDate = current.getFullYear() + '/' + (current.getMonth() + 1) + '/' + current.getDate();
            cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            dateTime = cDate + ' ' + cTime;
            return dateTime;
        },
        writeMessage(newMessage) {
            myMessage = {
                date: this.currentDate(),
                message: '',
                menuVisibility: false,
                status: 'sent',
                visualized: false,
            }
            reply = {
                date: this.currentDate(),
                message: this.arrMessage[this.getRandomInt(0, this.arrMessage.length - 1)],
                menuVisibility: false,
                status: 'received'
            }
            myMessage.message = newMessage;

            if (myMessage.message !== "") {
                this.contacts[this.selectedIndex].messages.push(myMessage); 
                this.newMessage = '';
                setTimeout(() => this.contacts[this.selectedIndex].lastMessageIndex = 2, 3000);
                setTimeout(() => this.contacts[this.selectedIndex].lastMessageIndex = 1, 5000);
                setTimeout(() => this.contacts[this.selectedIndex].lastMessageIndex = 1, 1000);
                setTimeout(() => this.contacts[this.selectedIndex].messages.push(reply), 6000);
                setTimeout(() => this.contacts[this.selectedIndex].lastMessageIndex = 0, 7000);
                setTimeout(() => this.contacts[this.selectedIndex].messages[this.contacts[this.selectedIndex].messages.length - 1].visualized = true, 1000)

            } 
        },
        filter() {
            this.contacts.forEach((ele, i) => {
                if (!this.contacts[i].name.toLowerCase().includes(this.filterName.toLowerCase())) {
                    this.contacts[i].visible = false;
                } else {
                    this.contacts[i].visible = true
                }
            });
        },
        openMenu(messageindex) {
            this.contacts[this.selectedIndex].messages[messageindex].menuVisibility = !this.contacts[this.selectedIndex].messages[messageindex].menuVisibility
        },
        deleteMessage(index) {
            this.contacts[this.selectedIndex].messages.splice(index, 1)
        },
        options() {
            this.showOptions = !this.showOptions
        },
        deleteAllMessages() {
            this.contacts[this.selectedIndex].messages.splice(0, this.contacts[this.selectedIndex].messages.length)
        },
        infoMessage(index) {
            console.log("Data: " + this.contacts[this.selectedIndex].messages[index].date);
            console.log("Messaggio: " + this.contacts[this.selectedIndex].messages[index].message);
            console.log("Stato: " + this.contacts[this.selectedIndex].messages[index].status);
        },
        attachment() {
           this.showSendImg = !this.showSendImg ;
        },
        sendImg() {
            url = prompt("inserisci l'url dell'immagine che vuoi inviare:");
            imgMex = {
                date: this.currentDate(),
                message: url,
                menuVisibility: false,
                status: 'sent',
                visualized: true,
            };
            this.contacts[this.selectedIndex].messages.push(imgMex);
        },
        chatMenu() {
            this.showChatMenu = !this.showChatMenu
        },
        deleteAllChat() {
            this.contacts.splice(0, this.contacts.length)
            this.selectedIndex = -1
        },
        deleteChat() {
            this.contacts.splice(this.selectedIndex, 1)
            if (this.contacts.length === 0) {
                this.selectedIndex = -1
            }
        },
        focusMessage() {
            this.$refs.inputMessage.focus()
        },
        focusSearch() {
            this.$refs.inputSearch.focus()
        },
        addChat() {
            newChat = {name: prompt("Come si chiama il tuo amico?"),
            avatar: 'https://picsum.photos/200',
            lastMessage: ["Ultimo accesso oggi alle ",
            "Online",
            "sta scrivendo...",
            ""],
            lastMessageIndex: 3,
            visible: true,
            messages: []
            };
            this.contacts.push(newChat)
        },
        returnToChat() {
            this.selectedIndex = -1;
        },
        lightMode() {
            this.darkTheme = false
        },
        darkMode() {
            this.darkTheme = true
        },
        fontSizePlus() {
            this.fontSize++
        },
        fontSizeMinus() {
            this.fontSize--
        }
    },
    mounted() {
        setTimeout(() => this.loading = !this.loading, 3000)
    }
})