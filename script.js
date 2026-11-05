const tutorials = {
    headphones: {
        title: "صيانة السماعات",
        videos: [
            {
                name: "شرح صيانة السماعات",
                url: "https://www.youtube.com/embed?listType=search&list=headphones+repair+tutorial"
            }
        ]
    },

    motherboards: {
    title: "صيانة البورد الإلكترونية",
    videos: [
        {
            name: "شرح صيانة البورد",
            url: "https://www.youtube.com/embed/1cUSNyzU1K4"
        }
    ]
},

    batteries: {
        title: "صيانة البطاريات",
        videos: [
            {
                name: "شرح فحص البطاريات بأمان",
                url: "https://www.youtube.com/embed?listType=search&list=battery+safety+and+testing+tutorial"
            }
        ]
    },

    chargers: {
        title: "صيانة شواحن الموبايل",
        videos: [
            {
                name: "شرح صيانة الشواحن",
                url: "https://www.youtube.com/embed?listType=search&list=phone+charger+repair+tutorial"
            }
        ]
    },

    screens: {
        title: "صيانة شاشات الموبايل",
        videos: [
            {
                name: "شرح صيانة شاشات الموبايل",
                url: "https://www.youtube.com/embed?listType=search&list=mobile+screen+repair+tutorial"
            }
        ]
    },

    computers: {
        title: "صيانة الكمبيوتر واللابتوب",
        videos: [
            {
                name: "شرح صيانة اللابتوب",
                url: "https://www.youtube.com/embed?listType=search&list=laptop+repair+tutorial"
            }
        ]
    },

    remotes: {
        title: "صيانة الريموتات والأجهزة",
        videos: [
            {
                name: "شرح صيانة الريموت",
                url: "https://www.youtube.com/embed?listType=search&list=remote+control+repair+tutorial"
            }
        ]
    }
};

const cards = document.querySelectorAll(".card");
const title = document.getElementById("tutorial-title");
const message = document.getElementById("tutorial-message");
const container = document.getElementById("video-container");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const category = card.dataset.category;
        const selected = tutorials[category];

        title.textContent = selected.title;
        message.textContent = "اختر الفيديو لمشاهدة الشرح";

        container.innerHTML = "";

        selected.videos.forEach(video => {
            const videoCard = document.createElement("div");
            videoCard.className = "video-card";

            const heading = document.createElement("h3");
            heading.textContent = video.name;

            const iframe = document.createElement("iframe");
            iframe.src = video.url;
            iframe.allowFullscreen = true;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

            videoCard.appendChild(heading);
            videoCard.appendChild(iframe);
            container.appendChild(videoCard);
        });

        document.getElementById("tutorials").scrollIntoView({
            behavior: "smooth"
        });
    });
});