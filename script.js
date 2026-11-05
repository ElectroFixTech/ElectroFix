
const tutorials = {
    headphones: {
        title: "صيانة السماعات",
        videos: [
            {
                name: "شرح صيانة السماعات اللاسلكية",
                url: "https://www.youtube.com/embed/YaMrG69FRM8"
            },
            {
                name: "شرح أعطال سماعات الصب",
                url: "https://www.youtube.com/embed/xSpJSgN2IQw"
            }
        ]
    },

    batteries: {
        title: "البطاريات",
        videos: [
            {
                name: "فحص البطاريات واستخدامها بأمان",
                url: "https://www.youtube.com/embed?listType=search&list=" +
                    encodeURIComponent("فحص البطاريات بأمان وشرح أنواع البطاريات")
            }
        ]
    },

    chargers: {
        title: "شواحن الموبايل",
        videos: [
            {
                name: "أساسيات شواحن الموبايل والسلامة",
                url: "https://www.youtube.com/embed?listType=search&list=" +
                    encodeURIComponent("شرح شواحن الموبايل وأساسيات الإلكترونيات")
            }
        ]
    },

    screens: {
        title: "شاشات الموبايل",
        videos: [
            {
                name: "شرح أعطال شاشات الموبايل",
                url: "https://www.youtube.com/embed?listType=search&list=" +
                    encodeURIComponent("شرح أعطال شاشات الموبايل بالعربي")
            }
        ]
    },

    computers: {
        title: "الكمبيوتر واللابتوب",
        videos: [
            {
                name: "تعليم صيانة الكمبيوتر واللابتوب",
                url: "https://www.youtube.com/embed?listType=search&list=" +
                    encodeURIComponent("تعليم صيانة الكمبيوتر واللابتوب للمبتدئين بالعربي")
            }
        ]
    },

    remotes: {
        title: "الريموتات والأجهزة",
        videos: [
            {
                name: "شرح أعطال الريموتات والأجهزة",
                url: "https://www.youtube.com/embed?listType=search&list=" +
                    encodeURIComponent("شرح أعطال الريموت كنترول بالعربي")
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
        message.textContent = "اختر الفيديو لمشاهدة الشرح";
        container.innerHTML = "";

        selected.videos.forEach(video => {
            const videoCard = document.createElement("div");
            videoCard.className = "video-card";

            const heading = document.createElement("h3");
            heading.textContent = video.name;

            const iframe = document.createElement("iframe");
            iframe.src = video.url;
            iframe.title = video.name;
            iframe.loading = "lazy";
            iframe.allowFullscreen = true;
            iframe.allow =
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

            videoCard.appendChild(heading);
            videoCard.appendChild(iframe);
            container.appendChild(videoCard);
        });

        document.getElementById("tutorials").scrollIntoView({
            behavior: "smooth"
        });
    });
});
