const letters = {

    reminder: {

        title: "A Little Reminder",

        text: `

            <p>Dear Wolf,</p>

            <p>
                You're honestly one of the close friends I've made here at uni,
                and I'm really glad I got to know you. It's funny because your
                actual name is Ronya, but somehow I ended up naming you Wolf
                and now we're just going with it haha.
            </p>

            <p>
                You're such a nonchalant person sometimes lmao. You have this
                way of acting like nothing really bothers you, and honestly,
                I find that pretty funny. But even with that, you're someone
                I genuinely enjoy having around.
            </p>

            <p>
                I'm really glad that uni gave me a friend like you. We've had
                a lot of random moments together, and I hope we get to have
                many more of them.
            </p>

            <p>
                So yeah, just a little reminder that I'm really glad you're
                my friend, Wolf. Even if I was the one who gave you that
                ridiculous name in the first place haha.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `

    },


    things: {

        title: "Little Things I Like",

        text: `

            <p>Dear Wolf,</p>

            <p>
                There are actually quite a few little things I like about you.
                I really like how chill you are. You're just very... Wolf.
                I don't know how else to explain it haha. You have that
                nonchalant personality where you can just sit there looking
                completely unbothered while everyone else is doing something stupid.
            </p>

            <p>
                And of course, I can't forget how you always treat me food hehe.
                I'm definitely not complaining about that one. You already
                know how to keep a friend around lmao.
            </p>

            <p>
                I also really admire how good you are at volleyball. You make
                it look so natural, and it's honestly pretty cool to watch
                you play.
            </p>

            <p>
                And honestly, I'm glad we became friends. Some friendships
                don't need a lot of explaining or anything complicated. You
                just become close, make random memories, joke around, and
                somehow it becomes something you really appreciate.
            </p>

            <p>
                So yeah, thanks for the food, the random moments, and just
                being a good friend hehe.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `

    },


    heart: {

        title: "Keep Walking",

        text: `

            <p>Dear Wolf,</p>

            <p>
                I hope you always remember that God is with you, even during
                the parts of life that feel uncertain or when you don't really
                know what comes next.
            </p>

            <p>
                There will be times when things don't go the way you planned,
                and there might be moments when you question where you're
                going in life. But I hope you never feel like you have to
                figure everything out by yourself. Trust God and let Him guide
                you, even when you can't see the whole path yet.
            </p>

            <p>
                I pray that God gives you wisdom for the decisions you make,
                strength when things get difficult, and peace when your mind
                feels heavy. I hope He protects you, keeps the right people
                around you, and gives you many reasons to be grateful along
                the way.
            </p>

            <p>
                And Wolf, don't forget to enjoy the life you're living right
                now too. Keep doing the things you love, keep growing, keep
                making memories, and keep becoming the person you're meant to be.
            </p>

            <p>
                You don't have to have everything figured out. Just keep
                walking, trust God, and take things one step at a time.
            </p>

            <p>
                I'm really glad our paths crossed here at uni, and I hope
                we'll have many more years of friendship and stupid memories
                ahead of us haha.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `

    }

};



const mailbox =
    document.getElementById("mailbox");

const lettersArea =
    document.getElementById("lettersArea");

const instruction =
    document.getElementById("instruction");

const overlay =
    document.getElementById("letterOverlay");

const closeLetter =
    document.getElementById("closeLetter");

const letterHeading =
    document.getElementById("letterHeading");

const letterBody =
    document.getElementById("letterBody");

const envelopes =
    document.querySelectorAll(".envelope");



let mailboxOpened = false;

let selectedLetter = false;



mailbox.addEventListener("click", () => {

    if (mailboxOpened) {

        return;

    }

    mailboxOpened = true;

    mailbox.classList.add("open");

    mailbox.classList.add("shake");

    setTimeout(() => {

        mailbox.classList.remove("shake");

    }, 700);



    instruction.innerHTML =
        "There are three letters inside.<br><strong>You can only choose one.</strong>";



    setTimeout(() => {

        lettersArea.classList.add("visible");



        envelopes.forEach((envelope, index) => {

            setTimeout(() => {

                envelope.classList.add("pop");

            }, index * 130);

        });

    }, 550);

});



envelopes.forEach(envelope => {

    envelope.addEventListener("click", () => {

        if (selectedLetter) {

            return;

        }

        selectedLetter = true;



        const key =
            envelope.dataset.letter;

        const letter =
            letters[key];



        if (!letter) {

            return;

        }



        letterHeading.textContent =
            letter.title;

        letterBody.innerHTML =
            letter.text;



        envelope.classList.add("selected");



        envelopes.forEach(other => {

            if (other !== envelope) {

                other.classList.add("locked");

            }

        });



        setTimeout(() => {

            overlay.classList.add("open");

        }, 200);

    });

});



closeLetter.addEventListener("click", () => {

    overlay.classList.remove("open");

});



overlay.addEventListener("click", event => {

    if (event.target === overlay) {

        overlay.classList.remove("open");

    }

});



document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        overlay.classList.remove("open");

    }

});



function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";



    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.top =
        "-20px";



    const colors = [

        "#A9D2E6",
        "#B9DDEA",
        "#CBE7F0",
        "#DCEFF5",
        "#8FBFD7"

    ];



    petal.style.background =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];



    petal.style.animationDuration =
        (4 + Math.random() * 3) + "s";



    document.body.appendChild(petal);



    requestAnimationFrame(() => {

        petal.classList.add("active");

    });



    setTimeout(() => {

        petal.remove();

    }, 7500);

}



setInterval(() => {

    if (
        document.visibilityState === "visible"
    ) {

        createPetal();

    }

}, 2600);



setInterval(() => {

    if (
        !mailboxOpened &&
        document.visibilityState === "visible"
    ) {

        mailbox.animate(

            [

                {

                    transform:
                        "translateY(0) rotate(0deg)"

                },

                {

                    transform:
                        "translateY(-4px) rotate(-1deg)"

                },

                {

                    transform:
                        "translateY(0) rotate(0deg)"

                }

            ],

            {

                duration: 900,

                easing: "ease-in-out"

            }

        );

    }

}, 6000);
