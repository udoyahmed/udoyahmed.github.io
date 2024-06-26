let refs = [
    "Reshad Ansary",
    "Sheikh Fariaj Onkon",
    "Sihabul Islam Sohan",
    "Debojit Sarker Pallab",
    "Merajul Islam Siam",
    "Jajaulehsan Shafi",
    "Mitul",
    "Nishat Salsabil Swarno",
    "Samiul Haq Mim",
    "Md.Munif Amin",
    "Ayshwarza Sarkar",
    "Md Abdullah Al Sani",
    "Musfiqur Rahman Shishir",
    "Riffat Maria",
    "Miti ",
    "Mahi Siddique Joy",
    "Asifur Rahman Apon"
]



$(".btn").on("click", async () => {
    await $(".btn").remove();

    
    const timeoutPromises = [];

    for (let i = 0; i < refs.length; i++) {
        timeoutPromises.push(new Promise(resolve => {
            setTimeout(() => {
                $(".array > ol").append(`<li><h3>${i + 1}. ${refs[i]}</h3></li>`);
                resolve(); 
            }, 500 * i);
        }));
    }
    await Promise.all(timeoutPromises);
    $(".final").html(`<h2>Congrats! You refered ${refs.length} people. But is it higher than Jarif's?</h2>
        <a href="./result.html"><button type="button" class="btn btn-outline-success btn-lg">Check</button></a>`);
});