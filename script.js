// script.js
document.addEventListener('DOMContentLoaded', () => {
    const subtitles = [
        "～　お前の拳で脂肪を討て　～",
        "～　筋肉こそが、我らの希望である　～",
        "～　力を合わせて、明日を切り拓こうではないか　～",
        "～　お前とともに戦った日々、忘れやしないさ　～",
        "～　恐れるな、我らの未来は希望に満ち溢れている　～",
        "～　無理するな、また明日頑張ればいい　～",
        "～　その筋肉は、夢か現か、はたまた幻か　～",
        "～　スクワットはお前を裏切らない　～",
        "～　筋肉と気合いで、脂肪を乗り越えよう　～",
        "～　愛と勇気のシックスパック　～",
        "～　来たれ、健康体を目指さんとす、我らが同胞よ　～"
    ];

    const subtitleElement = document.getElementById('subtitle');
    const randomIndex = Math.floor(Math.random() * subtitles.length);
    subtitleElement.textContent = subtitles[randomIndex];
});
