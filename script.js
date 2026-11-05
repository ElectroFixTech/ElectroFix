
const tutorials = {
    headphones: {
        title: "صيانة السماعات",
        videos: [
            {
                name: "فيديو 1 - السماعات",
                url: "https://youtube.com/watch?v=xSpJSgN2IQw&si=MjqstJGK2VHFGmst"
            },
            {
                name: "فيديو 2 - السماعات",
                url: "https://youtube.com/watch?v=ozz0faw99L8&si=Nod0inG2LTHfF7r7"
            }
        ]
    },

    batteries: {
        title: "البطاريات",
        videos: [
            {
                name: "فيديو 1 - البطاريات",
                url: "https://youtube.com/watch?v=bHc7DlWW7pc&si=U-IDRKqn_dXjM8pE"
            },
            {
                name: "فيديو 2 - البطاريات",
                url: "https://youtube.com/watch?v=7hnPB0c2U0c&si=bS1GZ9zsJmgS0kMU"
            }
        ]
    },

    chargers: {
        title: "شواحن الموبايل",
        videos: [
            { name: "فيديو 1 - الشواحن", url: "https://www.youtube.com/embed/PGlk3NP-Tgo" },
            { name: "فيديو 2 - الشواحن", url: "https://youtube.com/watch?v=E9VvP7Mebj4&si=3bVZsxwqFFYzWgFb" }
        ]
    },

    screens: {
        title: "شاشات الموبايل",
        videos: [
            { name: "فيديو 1 - الشاشات", url: "" },
            { name: "فيديو 2 - الشاشات", url: "" }
        ]
    },

    computers: {
        title: "الكمبيوتر واللابتوب",
        videos: [
            { name: "فيديو 1 - الكمبيوتر", url: "https://www.youtube.com/embed/Ht87FThvKuc" },
            { name: "فيديو 2 - الكمبيوتر", url: "https://www.youtube.com/embed/FxVwJ5ZZAqE" }
        ]
    },

    remotes: {
        title: "الريموتات والأجهزة",
        videos: [
            { name: "فيديو 1 - الريموتات", url: "" },
            { name: "فيديو 2 - الريموتات", url: "" }
        ]
    }
};

// تحويل رابط YouTube العادي إلى Embed
function convertToEmbed(url) {
    try {
        const parsed = new URL(url);
        let id = "";

        if (parsed.hostname.includes("youtu.be")) {
            id = parsed.pathname.slice(1);
        } else if (parsed.pathname === "/watch") {
            id = parsed.searchParams.get("v");
        } else if (parsed.pathname.startsWith("/embed/")) {
            id = parsed.pathname.split("/")[2];
        }

        return id
            ? `https://www.youtube.com/embed/${id}`
            : "";
    } catch {
        return "";
    }
}

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

        const availableVideos = selected.videos.filter(
            video => video.url.trim() !== ""
        );

        if (availableVideos.length === 0) {
            message.textContent = "لم تتم إضافة فيديوهات لهذا القسم بعد.";
        } else {
            message.textContent = "الفيديوهات التعليمية";

            availableVideos.forEach(video => {
                const embedUrl = convertToEmbed(video.url);

                if (!embedUrl) return;

                const videoCard = document.createElement("div");
                videoCard.className = "video-card";

                const heading = document.createElement("h3");
                heading.textContent = video.name;

                const iframe = document.createElement("iframe");
                iframe.src = embedUrl + "?rel=0";
                iframe.title = video.name;
                iframe.loading = "lazy";
                iframe.allowFullscreen = true;
                iframe.referrerPolicy = "strict-origin-when-cross-origin";
                iframe.allow =
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

                videoCard.append(heading, iframe);
                container.appendChild(videoCard);
            });
        }

        document.getElementById("tutorials").scrollIntoView({
            behavior: "smooth"
        });
    });
});
