document.addEventListener('DOMContentLoaded', () => {
    const subtitles = [
        "～共に立ち上がろう、我らの未来のために～",
        "～希望の光を掲げ、我らの道を照らそう～",
        "～力を合わせて、明日を切り拓こう～",
        "～誇り高く進もう、共に一丸となって～",
        "～友情と信頼で、強く結びつこう～",
        "～挑戦を恐れず、一緒に勝利を掴もう～",
        "～心を一つにして、夢を現実にしよう～",
        "～共に歩み、成功の扉を開こう～",
        "～愛と絆で、困難を乗り越えよう～",
        "～希望の旗を掲げ、未来を切り開こう～",
        "～来たれ、健康体を目指さんとす、我らが同胞よ～"
    ];

    const subtitleElement = document.getElementById('subtitle');
    const randomIndex = Math.floor(Math.random() * subtitles.length);
    subtitleElement.textContent = subtitles[randomIndex];
});
