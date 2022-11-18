new Vue ({
    el:"#app",
    data:{
        contacts: [
            {
            name: 'Michele',
            avatar: 'img/avatar_1.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            menuVisibility: false,
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            menuVisibility: false,
            status: 'sent'
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
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            menuVisibility: false,
            status: 'sent'
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
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: 'img/avatar_3.jpg',
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
            status: 'sent'
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
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            menuVisibility: false,
            status: 'sent'
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
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            menuVisibility: false,
            status: 'sent'
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
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            menuVisibility: false,
            status: 'sent'
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
            status: 'sent'
            }
            ],
            },
            {
            name: 'Federico',
            avatar: 'img/avatar_7.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            menuVisibility: false,
            status: 'sent'
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
            status: 'sent'
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
        selectedIndex: 0,
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
        lastMessage: ["Ultimo accesso oggi alle ",
        "Online",
        "sta scrivendo..."],
        lastMessageIndex: 0,
       
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
                status: 'sent'
            }
            reply = {
                date: this.currentDate(),
                message: this.arrMessage[this.getRandomInt(0, this.arrMessage.length - 1)],
                menuVisibility: false,
                status: 'received'
            }
            myMessage.message = newMessage;
            this.contacts[this.selectedIndex].messages.push(myMessage); 
            this.newMessage = '';
            setTimeout(() => this.lastMessageIndex = 1, 1000);
            setTimeout(() => this.lastMessageIndex = 2, 3000);
            setTimeout(() => this.lastMessageIndex = 1, 5000);
            setTimeout(() => this.contacts[this.selectedIndex].messages.push(reply), 6000);
            setTimeout(() => this.lastMessageIndex = 0, 7000)
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
                status: 'sent'
            };
            this.contacts[this.selectedIndex].messages.push(imgMex);
        },
        chatMenu() {
            this.showChatMenu = !this.showChatMenu
        },
        deleteChat() {
            this.contacts.splice(0, this.contacts.length)
        },
    },
})