
const tutorials = {
    headphones: {
        title: "صيانة السماعات",
        videos: [
            {
                name: "شرح صيانة السماعات",
                id: "xGxhshp6KQY"
            }
        ]
    },

    batteries: {
        title: "البطاريات",
        videos: []
    },

    chargers: {
        title: "شواحن الموبايل",
        videos: []
    },

    screens: {
        title: "شاشات الموبايل",
        videos: []
    },

    computers: {
        title: "الكمبيوتر واللابتوب",
        videos: []
    },

    remotes: {
        title: "الريموتات والأجهزة",
        videos: [
            {
                name: "شرح الريموتات",
                id: "pgu72cJwPfw"
            },
            {
                name: "شرح أعطال الريموت",
                id: "as9qy_bAgeU"
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

        if (!selected) return;

        title.textContent = selected.title;
        container.innerHTML = "";

        if (selected.videos.length === 0) {
            message.textContent = "سيتم إضافة الفيديوهات قريبًا";
            return;
        }

        message.textContent = "شاهد الفيديوهات التعليمية";

        selected.videos.forEach(video => {
            const videoCard = document.createElement("div");
            videoCard.className = "video-card";

            const heading = document.createElement("h3");
            heading.textContent = video.name;

            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${video.id}`;
            iframe.title = video.name;
            iframe.loading = "lazy";
            iframe.allowFullscreen = true;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

            videoCard.append(heading, iframe);
            container.appendChild(videoCard);
        });

        document.getElementById("tutorials").scrollIntoView({
            behavior: "smooth"
        });
    });
});
