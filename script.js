
const tutorials = {
    headphones: {
        title: "صيانة السماعات",
        videos: [
            {
                name: "أسرار صيانة السماعات اللاسلكية",
                id: "YaMrG69FRM8"
            }
        ]
    },

    batteries: {
        title: "البطاريات",
        videos: [
            {
                name: "البطاريات وكيف تعمل",
                id: "kZq6wgiUj5Y"
            }
        ]
    },

    chargers: {
        title: "شواحن الموبايل",
        videos: [
            {
                name: "كيف يعمل شاحن الهاتف الذكي",
                id: "95-zoh60Wek"
            }
        ]
    },

    screens: {
        title: "شاشات الموبايل",
        videos: [
            {
                name: "معرفة مكونات شاشة الموبايل",
                id: "qZD_lBTFqqg"
            }
        ]
    },

    computers: {
        title: "الكمبيوتر واللابتوب",
        videos: [
            {
                name: "مكونات الكمبيوتر من الداخل",
                id: "Ht87FThvKuc"
            }
        ]
    },

    remotes: {
        title: "الريموتات والأجهزة",
        videos: [
            {
                name: "طريقة إصلاح الريموت كنترول",
                id: "GtH-4EhPxB0"
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
        message.textContent = "الفيديوهات التعليمية";
        container.innerHTML = "";

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

            videoCard.appendChild(heading);
            videoCard.appendChild(iframe);
            container.appendChild(videoCard);
        });

        document.getElementById("tutorials").scrollIntoView({
            behavior: "smooth"
        });
    });
});
